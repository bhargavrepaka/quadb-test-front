const getData = async () => {
  const response = await fetch("http://localhost:3000/getData");
//   fetch("http://localhost:3000/getData")
  console.log(await response.json());
  return await response.json();
};

const createRow = (item,index) => {
    const tr=document.createElement('tr');
    tr.innerHTML=`
        <tr>
            <td>
              <h4 class="table-text">${index+1}</h4>
            </td>
            <td>
              <div class="coin-info">
                <h4>${item.name}</h4>
              </div>
            </td>
            <td>
              <h4 class="table-text">₹ ${parseFloat(item.last).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h4>
            </td>
            <td>
              <h4 class="table-text"><span>₹ ${parseFloat(item.buy).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})} / ₹ ${parseFloat(item.sell).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></h4>
            </td>
            <td>
              <h4 class="table-text color-red">₹ ${parseFloat(item.low).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})} </h4>
            </td>
            <td>
              <h4 class="table-text color-green"> ₹ ${parseFloat(item.high).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h4>
            </td>
        </tr>
    `;
    return tr;
};
const createBigDisplay = (item) => {
    const bigDisplay=document.getElementById('big-display');
    bigDisplay.innerHTML=`
    <div class="big-display" >
      <div class="text-center">
        <div class="card-text "> ₹ ${parseFloat(item.low).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
        <div class="card-subtitle">Low</div>
      </div>
      <div class="text-center">
        <div class="card-text "> ₹ ${parseFloat(item.low).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
        <div class="card-subtitle">Last</div>
      </div>
      <div style="max-width: 40%">
        <div class="text-center">
          <div class="card-uppertitle">
            Best Price to Trade
          </div>
          <div class="card-big-title">
            ₹ ${parseFloat(item.buy).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </div>
          <div class="card-lowertitle">
            Average ${item.name} net price including commission
          </div>
        </div>
      </div>
      <div class="text-center">
        <div class="card-text ">${item.volume}</div>
        <div class="card-subtitle">Volume</div>
      </div>
      <div class="text-center">
        <div class="card-text ">₹ ${parseFloat(item.high).toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})} </div>
        <div class="card-subtitle">High</div>
      </div>
    </div>
        `
}

async function main() {
    console.log("hello");
  try {
    const {data} = await getData();
    console.log(data);
    const tbody = document.getElementById("tbody");
    // createBigDisplay(data[0]);
    data.forEach((item,index) => {
      tbody.appendChild(createRow(item,index));
    });

  } catch (error) {
    console.log(error);
  }
}
main();
// polling every 10 seconds
setInterval(main, 10000);