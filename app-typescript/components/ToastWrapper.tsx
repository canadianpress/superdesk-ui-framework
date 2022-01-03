import * as React from 'react';
import { ToastMessage, MessageProp, IMessageOptions } from './ToastMessage';

type State = {
  top: Array<IMessageOptions>;
  bottom: Array<IMessageOptions>;
  'top-right': Array<IMessageOptions>;
  'top-left': Array<IMessageOptions>;
  'bottom-right': Array<IMessageOptions>;
  'bottom-left': Array<IMessageOptions>;
};

const firstState: State = {
  top: [],
  bottom: [],
  'top-right': [],
  'top-left': [],
  'bottom-right': [],
  'bottom-left': [],
};

export default class ToastWrapper extends React.PureComponent<{}, State> {
  static idCounter = 0;

  state: State = firstState;

  constructor(props: {}) {
    super(props);
    this.notify = this.notify.bind(this);
  }

  notify = (message: MessageProp, options: Partial<IMessageOptions>) => {
    const toast = this.createToastState(message, options);
    const { position } = toast;

    const isTop = position === 'top';
    this.setState((prev) => {
      return {
        ...prev,
        [position]: isTop
          ? [toast, ...prev[position]]
          : [...prev[position], toast],
      };
    });
    return { id: toast.id, position: toast.position };
  }

  createToastState = (
    message: MessageProp,
    options: Partial<IMessageOptions>,
  ) => {
    const id = '' + ++ToastWrapper.idCounter;
    const position = options.position ?? 'top';
    return {
      id,
      message,
      icon: options.icon,
      position,
      duration: options.duration,
      type: options.type,
      size: options.size,
    };
  }

  requestClose = (id: string, position: keyof State) => {
    this.setState((prev) => {
      return {
        ...prev,
        [position]: prev[position].filter((toast) => toast.id !== id),
      };
    });
  }

  render() {
    return Object.keys(this.state).map((position) => {
      const pos = position as keyof State;
      const toasts = this.state[pos];
      return (
        <div
          key={position}
          className={"sd-toast__container sd-toast__container--" + pos}
        >
          {(pos === 'top' ?
            toasts : [...toasts].reverse()).map((toast: IMessageOptions) => {
              return <ToastMessage position={pos} type={toast.type} icon={toast.icon} closeElement={this.requestClose}
                duration={toast.duration} key={toast.id} id={toast.id} message={toast.message} size={toast.size} />;
            })}
        </div>
      );
    });
  }
}
