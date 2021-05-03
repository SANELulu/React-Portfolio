import React from "react";
import { Link } from "react-router-dom";

function InfoCard() {
  return (
    <div>
      <div class="card-group d-inline p-3">
        <div class="card col-4">
          <img class="card-img-top p-2" src="..." alt="Card image cap"></img>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
