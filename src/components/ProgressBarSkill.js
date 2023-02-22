import React, { useState } from 'react';
import "../css/ProgressBar.css"

export const ProgressBarSkill = () => {
  return (
    <div class="box">
        <div class="percent">
            <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">
            <h2>87<span>%</span></h2>
            </div>
        </div>
        <h2 class="text">Progress</h2>
    </div>
  );
};