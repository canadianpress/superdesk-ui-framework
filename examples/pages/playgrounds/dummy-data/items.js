const items = [
    {
        image: '/d_trump.jpg',
        imageAlt: 'Moron',
        title: 'Lorem ipsum dolor sit amet, consectetur',
        description: 'Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
        date: '05.11.2020',
        type: 'photo',
        urgency: '1',
        priority: '3',
        urgencyColor: 'deep-orange--600',
        priorityColor: 'light-green--600',
        locked: true,
        status: ['selected'],
        selected: true
    },
    {
        image: '/obama_2.jpg',
        imageAlt: 'Barack',
        title: 'Sed posuere consectetur est at lobortis',
        description: 'Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.',
        date: '05.11.2020',
        type: 'photo',
        urgency: '2',
        priority: '3',
        urgencyColor: 'deep-orange--500',
        priorityColor: 'light-green--600',
        locked: false,
        status: [],
        selected: false
    },
    {
        image: '',
        imageAlt: '',
        title: 'Aenean eu leo quam',
        description: 'Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper.',
        date: '05.11.2020',
        type: 'audio',
        urgency: '2',
        priority: '5',
        urgencyColor: 'deep-orange--500',
        priorityColor: 'blue-grey--300',
        locked: false,
        status: [],
        selected: false
    },
    {
        image: '/bill.jpg',
        imageAlt: 'Bill',
        title: 'Pellentesque ornare sem lacinia quam venenatis',
        description: 'Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus.',
        date: '05.11.2020',
        type: 'photo',
        urgency: '3',
        priority: '5',
        urgencyColor: 'orange--500',
        priorityColor: 'blue-grey--300',
        locked: false,
        status: ['actioning'],
        selected: false
    },
    {
        image: '/hillary.jpg',
        imageAlt: 'Bill',
        title: 'Donec id elit non mi porta gravida at eget metus',
        description: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.',
        date: '05.11.2020',
        type: 'photo',
        urgency: '2',
        priority: '4',
        urgencyColor: 'deep-orange--500',
        priorityColor: 'blue-grey--500',
        locked: false,
        status: ['fetched'],
        selected: false
    },
    {
        image: '/bush_2.jpg',
        imageAlt: 'W. Bush',
        title: 'Donec ullamcorper nulla non metus auctor fringilla',
        description: 'Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.',
        date: '05.11.2020',
        type: 'photo',
        urgency: '3',
        priority: '5',
        urgencyColor: 'orange--500',
        priorityColor: 'blue-grey--300',
        locked: false,
        status: [''],
        selected: false
    },
];

export default items;