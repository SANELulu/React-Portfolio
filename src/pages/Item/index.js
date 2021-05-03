import React from "react";
import InfoCard from "../../components/InfoCard";
function Item() {
  return (
    <div class="row p-3 d-flex justify-content-center">
      <div class="card col-6 px-2">
        <img
          src="https://via.placeholder.com/100"
          class="rounded float-left"
          alt="..."
        ></img>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">TEXT 1 </li>
          <li class="list-group-item">TEXT 1</li>
          <li class="list-group-item">TEXT 1</li>
        </ul>
      </div>
      <div class="card col-4 px-2">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  );
}

export default Item;
