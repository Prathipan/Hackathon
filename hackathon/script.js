var heading = document.createElement("h1");
        heading.innerText = "Platform to find your makeup products";
        heading.setAttribute("class","heads")
        document.body.append(heading);


var form = document.createElement("div");
form.setAttribute("class","container");

form.innerHTML = `<form>
                 <div class="input-group mb-3">
                      <input type="text" id="brandName" class="form-control" placeholder="Search for a brand you are looking for">
                      <div class="input-group-append">
                        <button id="search" class="btn btn-color" type="button">Search</button>
                      </div>
                 </div>
                  </form>`;

document.body.append(form);

document.getElementById("search").addEventListener("click", ()=>{
    let searchInp = document.getElementById("brandName").value;
    console.log(searchInp);
});


async function call_data(){
    try{
        let data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
        let json_data = await data.json();
        console.log(json_data);


        json_data.forEach(items => {

            var container = document.createElement("div");
            container.setAttribute("class","container card-design");
            document.body.append(container);

            var row = document.createElement("div");
            row.setAttribute("class","row");
            container.append(row);

            var col1 = document.createElement("div");
            col1.setAttribute("class","col-lg-3 ");
            col1.innerHTML = `<img class="prod-img" src=${items.image_link} alt=${items.name}>`;
            row.append(col1);   
            
            var col2 = document.createElement("div");
            col2.setAttribute("class","col-lg-9");
            col2.innerHTML =`<h3 class="brandName"><strong> ${items.brand}</strong></h3>
                              <h5 class="ProductName">Product Name : ${items.name}</h5>
                              <p>${items.description}</p>
                              <h5>Price : ${items.price_sign}.${items.price}</h5>
                              <a href=${items.product_link}>Click here to Explore more</a>
                              `;
            row.append(col2);



            
            
        });
    }catch{
       alert("something went wrong !");
    }
}

call_data();