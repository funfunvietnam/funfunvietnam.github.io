---
layout: post
title: Top 20 International Visitors to Vietnam Ranking History (1995-2018)
description: Top 20 International Visitors to Vietnam Ranking History (1995-2018). China, Korea, Japan, Taiwan, and the United States are also topped the list of the most visited countries.
thumbnailref: /assets/images/2019/top-20-international-visitors-to-vietnam-ranking-history-from-1995-to-2018.png
keywords: Top 20 International Visitors to Vietnam Ranking History (1995-2018)
comments: true
tags: [recommend]
---

According to reports published by the Vietnam National Administration of Tourism, the trend of visiting Vietnam is gradually increased. As of 2018, more than 4.9 million visitors of China came to visit Vietnam. Korea, Japan, Taiwan, and the United States are also topped the list of the most visited countries.

This video shows the ranking history of top 20 International Visitors to Vietnam from 1995 to 2018.

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tNWlx-lMMr8" allowfullscreen></iframe>
</div>

<i class="mt-5"></i>

## International Visitors to Vietnam in 2018

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<style>
.visitors-ranking tbody tr td:last-child {text-align: right;font-family: 'Roboto', sans-serif;}
</style>
<table class="visitors-ranking table table-striped table-sm">
  <thead>
    <tr>
      <th>Rank</th>
      <th>Country</th>
      <th>Visitors</th>
    </tr>
  </thead>
  <tbody>
    <tr><th>1</th><td>China</td><td>4,966,468</td></tr>
    <tr><th>2</th><td>Korea</td><td>3,485,406</td></tr>
    <tr><th>3</th><td>Japan</td><td>826,674</td></tr>
    <tr><th>4</th><td>Taiwan</td><td>714,112</td></tr>
    <tr><th>5</th><td>USA</td><td>687,226</td></tr>
    <tr><th>6</th><td>Russia</td><td>606,637</td></tr>
    <tr><th>7</th><td>Malaysia</td><td>540,119</td></tr>
    <tr><th>8</th><td>Australia</td><td>386,934</td></tr>
    <tr><th>9</th><td>Thailand</td><td>349,310</td></tr>
    <tr><th>10</th><td>England</td><td>298,114</td></tr>
    <tr><th>11</th><td>Singapore</td><td>286,246</td></tr>
    <tr><th>12</th><td>France</td><td>279,659</td></tr>
    <tr><th>13</th><td>Germany</td><td>213,986</td></tr>
    <tr><th>14</th><td>Cambodia</td><td>202,954</td></tr>
    <tr><th>15</th><td>Philippines</td><td>151,641</td></tr>
    <tr><th>16</th><td>Canada</td><td>149,535</td></tr>
    <tr><th>17</th><td>Laos</td><td>120,009</td></tr>
    <tr><th>18</th><td>Indonesia</td><td>87,941</td></tr>
    <tr><th>19</th><td>Holland</td><td>77,300</td></tr>
    <tr><th>20</th><td>Spain</td><td>77,071</td></tr>
    <tr><th>21</th><td>Italy</td><td>65,562</td></tr>
    <tr><th>22</th><td>Hong Kong</td><td>62,208</td></tr>
    <tr><th>23</th><td>New Zealand</td><td>49,854</td></tr>
    <tr><th>24</th><td>Sweden </td><td>49,723</td></tr>
    <tr><th>25</th><td>Denmark</td><td>39,926</td></tr>
    <tr><th>26</th><td>Switzerland</td><td>34,541</td></tr>
    <tr><th>27</th><td>Belgium</td><td>31,382</td></tr>
    <tr><th>28</th><td>Norway </td><td>26,134</td></tr>
    <tr><th>29</th><td>Finland</td><td>22,785</td></tr>
  </tbody>
</table>

![Top 20 International Visitors to Vietnam Ranking History (1995-2018)](/assets/images/2019/top-20-international-visitors-to-vietnam-ranking-history-from-1995-to-2018.png)

---

<script src="/assets/js/Chart.min.js"></script>

<script>
window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
</script>

## Visitors in 2018 by Continents

<canvas id="Visitors2018ByContinents" class="embed-responsive embed-responsive-16by9"></canvas>
<script>
  var ctx = document.getElementById("Visitors2018ByContinents").getContext('2d');
  var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [
            12075466,
            903830,
            2037915,
            437819,
            42761,
          ],
          backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.green,
            window.chartColors.blue,
          ],
          label: 'Dataset 1'
        }],
        labels: [
          'Asia',
          'America',
          'Europe',
          'Oceania',
          'Africa'
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
  });
</script>

---

## Visitors by Year

<canvas id="VisitorsByYear" class="embed-responsive embed-responsive-16by9"></canvas>
<script>
var ctx = document.getElementById("VisitorsByYear").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
        datasets: [{
            label: 'Visitors',
            data: [1351300,1607200,1715600,1520100,1781800,2140100,2330800,2628200,2429600,2927876,3467757,3583486,4171564,4253740,3772359,5049855,6014032,6847678,7572352,7874312,7943651,10012735,12922151,15497791],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    }
});
</script>

## Visitors through Transportation by Year

<canvas id="VisitorsThroughTransportationByYear" class="embed-responsive embed-responsive-16by9"></canvas>
<script>
let mode = 'index';
let intersect = true
var ctx = document.getElementById("VisitorsThroughTransportationByYear").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
        datasets: [{
          label: 'by air',
          data: [1206800,939600,1033700,873700,1022100,1113100,1294500,1540300,1394800,1821595,,2702430,3261941,3283237,3025625,4061712,5031586,5575904,5979953,6220175,6271250,8260623,10910297,12484987],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        },{
          label: 'by sea',
          data: [21700,161900,131500,157200,187900,256100,284700,309100,241500,263362,,224081,224389,157198,65934,50500,46321,285546,193261,47583,169839,284855,258836,215306],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1
        },{
          label: 'by road',
          data: [122800,505700,550400,489300,571800,770900,751600,778800,793300,842919,,656975,685234,813305,680800,937643,936125,986228,1399138,1606554,1502562,1467257,1753018,2797498],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      tooltips: {
        mode: mode,
        intersect: intersect,
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
    }
});
</script>

<div class="col-12 my-3 mobile-banner">{% include plugins/google-ad-mobile-banner.html %}</div>
<div class="col-12 my-3 desktop-banner">{% include plugins/google-ad-automatic-size.html %}</div>

---

## Data Source
* <a href="http://vietnamtourism.gov.vn" target="_blank" rel="nofollow">Vietnam National Administration of Tourism</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/13551" target="_blank" rel="nofollow">Report of 2018</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/12453" target="_blank" rel="nofollow">Report of 2017</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/11311" target="_blank" rel="nofollow">Report of 2016</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/9968" target="_blank" rel="nofollow">Report of 2015</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/8149" target="_blank" rel="nofollow">Report of 2014</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/6709" target="_blank" rel="nofollow">Report of 2013</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/5425" target="_blank" rel="nofollow">Report of 2012</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/4286" target="_blank" rel="nofollow">Report of 2011</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/3248" target="_blank" rel="nofollow">Report of 2010</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/2096" target="_blank" rel="nofollow">Report of 2009</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/1257" target="_blank" rel="nofollow">Report of 2008</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/1264" target="_blank" rel="nofollow">Report of 2007</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/6718" target="_blank" rel="nofollow">Report of 2006</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/348" target="_blank" rel="nofollow">Report of 2005</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/360" target="_blank" rel="nofollow">Report of 2004</a>
* <a href="http://vietnamtourism.gov.vn/english/index.php/items/489" target="_blank" rel="nofollow">Report of 1995-2003</a>