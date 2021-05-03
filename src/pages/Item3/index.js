import React from "react";

function Item3() {
  return (
    <div>
      <a>ITEM THREE</a>
      <div class="accordion" id="accordionExample">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item3;
