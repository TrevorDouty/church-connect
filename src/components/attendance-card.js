import React from "react";

export default function AttendanceCard(group) {
  return (
    <div class="card bg-base-100 shadow-xl max-h-96">
      <figure>
        <img class="min-h-40" src={group.img} alt={group.groupName} />
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
