var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', additems);
itemlist.addEventListener('click', removeitem);
filter.addEventListener('keyup', search);

function additems(e)
{
    e.preventDefault();
    var newitem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newitem));

    var buttond = document.createElement('button');
    buttond.className = 'btn btn-danger btn-sm float-right delete';
    buttond.appendChild(document.createTextNode('X'));

    li.appendChild(buttond);

    itemlist.appendChild(li);
}

function removeitem(e)
{
    if(e.target.classList.contains('delete'))
    {
        var li = e.target.parentElement;
        itemlist.removeChild(li);
    }
}

function search(e)  
{
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    Array.from(items).forEach(function(item)
    {
        var itemname = item.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'non';
        }
    });
}