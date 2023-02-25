const { DateTime } = require("luxon");

const stories = [
{
    id: '1',
    title: 'A funny story',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae euismod tellus, nec interdum magna',
    author: 'Andrew',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '2',
    title: 'It is raining',
    content: 'Fusce elit massa, molestie sed volutpat vel, consectetur non urna. Suspendisse sit amet urna eleifend, vestibulum odio elementum, eleifend erat.',
    author: 'Kirkman',
    createdAt: DateTime.local(2021, 2, 12, 18, 0).toLocaleString(DateTime.DATETIME_SHORT)
}
];