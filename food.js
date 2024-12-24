let s=document.querySelector("p");
    
let list=document.createElement("ul");

list.innerHTML=`<li>"Every bite is an invitation to savor the beauty of simplicity and the joy of abundance"

</li><li>"Eating is a language spoken in spices, shared in laughter, and savored in silence"</li>`;

s.after(list);
s.prepend(list);
s.append(list);







