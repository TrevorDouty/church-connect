import React from "react";

export default function AttendanceCard() {
  return (
    <div class="card bg-base-100 shadow-xl max-h-96">
      <figure>
        <img
          class="min-h-40"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Attendance</h2>
        <div class="justify-self-center">
          <div
            class="radial-progress"
            style={{ "--value": "70" }}
            role="progressbar"
          >
            70%
          </div>
        </div>
        <p>members:</p>
        <p>past groups / total groups</p>
      </div>
    </div>
  );
}
