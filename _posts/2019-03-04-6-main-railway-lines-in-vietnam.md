---
layout: post
title: 6 main railway lines in Vietnam
description: Organized train schedule of 6 main railway lines in Vietnam, which are provided passenger service by Vietnam Railways company.
thumbnailref: https://images.pexels.com/photos/552501/pexels-photo-552501.jpeg?h=426&w=640
keywords: 6 main railway lines in Vietnam, train from hanoi to saigon, train from hanoi to sapa, train from hanoi to haiphong,vietnam train schedule
comments: true
tags: [recommend]
---

How is railway network in Vietnam? The total length of the Vietnamese railway network has almost 2,600 kilometers (1,600 mi). Base on the passenger service provided by Vietnam Railways, the state-owned operator of the railway system in Vietnam, I organized the 6 major railway lines as below.

{% capture lines %}
North - South railway,
Hanoi - Lào Cai railway,
Hanoi - Đồng Đăng railway,
Yên Viên - Hạ Long railway,
Hanoi - Haiphong railway,
Hanoi - Thái Nguyên railway
{% endcapture %}
{% assign lines = lines | split: "," %}

{% capture sublines_1_a %}
Hanoi to Saigon,
Hanoi to Da Nang,
Hanoi to Vinh,
Hue to Saigon,
Nha Trang to Saigon,
Phan Thiết to Saigon,
Quy Nhơn to Saigon
{% endcapture %}
{% assign sublines_1_a = sublines_1_a | split: "," %}

{% capture sublines_1_b %}
Saigon to Hanoi,
Da Nang to Hanoi,
Vinh to Hanoi,
Saigon to Hue,
Saigon to Nha Trang,
Saigon to Phan Thiết,
Saigon to Quy Nhơn
{% endcapture %}
{% assign sublines_1_b = sublines_1_b | split: "," %}

{% capture sublines_2_a %}
Hanoi to Lào Cai,
Hanoi to Yên Bái
{% endcapture %}
{% assign sublines_2_a = sublines_2_a | split: "," %}

{% capture sublines_2_b %}
Lào Cai to Hanoi,
Yên Bái to Hanoi
{% endcapture %}
{% assign sublines_2_b = sublines_2_b | split: "," %}

{% capture sublines_3_a %}
Hanoi to Đồng Đăng
{% endcapture %}
{% assign sublines_3_a = sublines_3_a | split: "," %}

{% capture sublines_3_b %}
Đồng Đăng to Hanoi
{% endcapture %}
{% assign sublines_3_b = sublines_3_b | split: "," %}

{% capture sublines_4_a %}
Yên Viên to Hạ Long
{% endcapture %}
{% assign sublines_4_a = sublines_4_a | split: "," %}

{% capture sublines_4_b %}
Hạ Long to Yên Viên
{% endcapture %}
{% assign sublines_4_b = sublines_4_b | split: "," %}

{% capture sublines_5_a %}
Hanoi to Hải Phòng
{% endcapture %}
{% assign sublines_5_a = sublines_5_a | split: "," %}

{% capture sublines_5_b %}
Hải Phòng to Hanoi
{% endcapture %}
{% assign sublines_5_b = sublines_5_b | split: "," %}

{% capture sublines_6_a %}
Hanoi to Quán Triều
{% endcapture %}
{% assign sublines_6_a = sublines_6_a | split: "," %}

{% capture sublines_6_b %}
Quán Triều to Hanoi
{% endcapture %}
{% assign sublines_6_b = sublines_6_b | split: "," %}

<style>
.accordion .card-header a {font-size:2rem;}
.accordion .nav-item {cursor: pointer;}
a.nav-link.active {color: #fff !important;}
.hide {display: none;}
</style>
<div class="accordion" id="accordion-6-main-railway-lines">
  <div class="card">
    {% for line in lines %}
      {% assign line_index = forloop.index %}
      {% if line_index == 1 %}
        {% assign sublines_a = sublines_1_a %}
        {% assign sublines_b = sublines_1_b %}
        {% assign anchor_a = "s" | append: line_index %}
        {% assign anchor_b = "n" | append: line_index %}
        {% assign tab_a = "to South" %}
        {% assign tab_b = "to North" %}
        {% assign collapse_show = "show" %}
      {% endif %}
      {% if line_index == 2 %}
        {% assign sublines_a = sublines_2_a %}
        {% assign sublines_b = sublines_2_b %}
        {% assign anchor_a = "w" | append: line_index %}
        {% assign anchor_b = "e" | append: line_index %}
        {% assign tab_a = "to West" %}
        {% assign tab_b = "to East" %}
        {% assign collapse_show = "" %}
      {% endif %}
      {% if line_index == 3 %}
        {% assign sublines_a = sublines_3_a %}
        {% assign sublines_b = sublines_3_b %}
        {% assign anchor_a = "n" | append: line_index %}
        {% assign anchor_b = "s" | append: line_index %}
        {% assign tab_a = "to North" %}
        {% assign tab_b = "to South" %}
        {% assign collapse_show = "" %}
      {% endif %}
      {% if line_index == 4 %}
        {% assign sublines_a = sublines_4_a %}
        {% assign sublines_b = sublines_4_b %}
        {% assign anchor_a = "e" | append: line_index %}
        {% assign anchor_b = "w" | append: line_index %}
        {% assign tab_a = "to East" %}
        {% assign tab_b = "to West" %}
        {% assign collapse_show = "" %}
      {% endif %}
      {% if line_index == 5 %}
        {% assign sublines_a = sublines_5_a %}
        {% assign sublines_b = sublines_5_b %}
        {% assign anchor_a = "e" | append: line_index %}
        {% assign anchor_b = "w" | append: line_index %}
        {% assign tab_a = "to East" %}
        {% assign tab_b = "to West" %}
        {% assign collapse_show = "" %}
      {% endif %}
      {% if line_index == 6 %}
        {% assign sublines_a = sublines_6_a %}
        {% assign sublines_b = sublines_6_b %}
        {% assign anchor_a = "n" | append: line_index %}
        {% assign anchor_b = "s" | append: line_index %}
        {% assign tab_a = "to North" %}
        {% assign tab_b = "to South" %}
        {% assign collapse_show = "" %}
      {% endif %}
      <div class="card-header d-flex justify-content-between" id="accordion-heading-{{line_index}}">
        <h2 class="mb-0">
          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse-{{line_index}}" aria-expanded="false" aria-controls="collapse-{{line_index}}">
            <span class="badge badge-primary mr-2">{{line_index}}</span>
            <span>{{line}}</span>
          </button>
        </h2>
        <a href="#title-line-{{line_index}}"><i class="fa fa-link"></i></a>
      </div>
      <div id="collapse-{{line_index}}" class="collapse collapse-line {{collapse_show}}" aria-labelledby="accordion-heading-{{line_index}}" data-parent="#accordion-6-main-railway-lines" data-line-index="{{line_index}}">
        <div class="card-body">
          <ul class="nav nav-pills justify-content-center border-bottom mb-3 pb-3">
            <li class="nav-item">
              <a class="nav-link active">{{tab_a}}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">{{tab_b}}</a>
            </li>
          </ul>
          <span class="w-100 sublines_a">
            {% for subline in sublines_a %}
              {% assign subline_index = forloop.index %}
              <p class="d-flex justify-content-between">
                <span class="ml-4">
                  <span class="badge badge-success mr-2">{{anchor_a}}</span>
                  <span>{{subline}}</span>
                </span>
                <a href="#title-line-{{line_index}}-sublines-{{subline_index}}-a"><i class="fa fa-link"></i></a>
              </p>
            {% endfor %}
          </span>
          <span class="w-100 sublines_b hide">
            {% for subline in sublines_b %}
              {% assign subline_index = forloop.index %}
              <p class="d-flex justify-content-between">
                <span class="ml-4">
                  <span class="badge badge-danger mr-2">{{anchor_b}}</span>
                  <span>{{subline}}</span>
                </span>
                <a href="#title-line-{{line_index}}-sublines-{{subline_index}}-b"><i class="fa fa-link"></i></a>
              </p>
            {% endfor %}
          </span>
        </div>
      </div>
    {% endfor %}
  </div>
</div>

<script>
function active_tab(btn, is_active = true) {
  var e = btn.querySelector('a')
  if (is_active)
    e.className += ' active';
  else
    e.className = e.className.replace(/\bactive\b/g, "");
}
function hide_element(e, is_hide = true) {
  if (is_hide)
    e.className += ' hide';
  else
    e.className = e.className.replace(/\bhide\b/g, "");
}
var collapse_lines = document.querySelectorAll('.collapse-line');
collapse_lines.forEach(function(e){
  var a = e.querySelector('.sublines_a');
  var b = e.querySelector('.sublines_b');
  var btnA = e.querySelector('.nav .nav-item:first-child');
  var btnB = e.querySelector('.nav .nav-item:last-child');
  btnA.addEventListener('click', function(){
    hide_element(a, false)
    hide_element(b)
    active_tab(btnA)
    active_tab(btnB, false)
  })
  btnB.addEventListener('click', function(){
    hide_element(a)
    hide_element(b, false)
    active_tab(btnA, false)
    active_tab(btnB)
  })
})
</script>

<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<style>
.railway-table tbody tr td {font-family: 'Roboto', sans-serif;}
.railway-table tbody tr td:last-child {text-align: right;}
.railway-table .card-header a {cursor: pointer;}
.train-meta {font-size: .8rem;}
.station-index {position: relative;}
.station-index:after {
  content: "";
  width: 0;
  height: 26px;
  border: 0.5px dashed red;
  position: absolute;
  left: 50%;
  top: 100%;
}
.hide-path.station-index:after{display: none;}
.s-3.station-index:after{left:calc(50% - 1px);}
.s-1{font-size:.5rem;}
.s-2{font-size:.7rem;}
.s-3{font-size:1rem;}
.day-2{background-color: #EAFAF1;}
.day-3{background-color: #FEF5E7;}
.head-title-line h2 {font-size: 1.3rem;display: inline-block;}
.head-title-line .badge {font-size: 1rem;}
.head-title-sublines h3 {font-size: 1rem;display: inline-block;}
.meta-railway img {max-width: 100%; max-height: 260px;}
</style>

---

<div id="title-line-1" class="head-title-line">
  <span class="badge badge-primary mr-2">1</span>
  <h2>North - South Railway</h2>
</div>

<div class="meta-railway row mb-3">
  <div class="col-6">
    <img src="/assets/images/2019/vietnam-railway-line-HNO-SGO.jpg" alt="Vietnam railway Hanoi to Saigon">
  </div>
  <div class="col-6">
    <table class="table-striped">
      <tbody>
        <tr><th>Established</th><td>1936</td></tr>
        <tr><th>Length</th><td>1,726 km</td></tr>
        <tr><th>Gauge</th><td>Metre gauge</td></tr>
      </tbody>
    </table>
  </div>
</div>

{% include addons/railway-sublines-table.html 
  title="Hanoi to Saigon"
  line_id="1"
  subline_id="s1"
  badge_color="success"
  anchor_id="title-line-1-sublines-1-a"
  direction="to south"
  line="HNO-SGO"
  trains="SE1,SE3,SE5,SE7,SE9" %}

{% include addons/railway-sublines-table.html 
  title="Hanoi to Da Nang"
  line_id="1"
  subline_id="s2"
  badge_color="success"
  anchor_id="title-line-1-sublines-2-a"
  direction="to south"
  line="HNO-DNA"
  trains="SE19" %}

{% include addons/railway-sublines-table.html 
  title="Hanoi to Vinh"
  line_id="1"
  subline_id="s3"
  badge_color="success"
  anchor_id="title-line-1-sublines-3-a"
  direction="to south"
  line="HNO-VIN"
  trains="SE35,NA1" %}

{% include addons/railway-sublines-table.html 
  title="Hue to Saigon"
  line_id="1"
  subline_id="s4"
  badge_color="success"
  anchor_id="title-line-1-sublines-4-a"
  direction="to south"
  line="HUE-SGO"
  trains="SE21" %}

{% include addons/railway-sublines-table.html 
  title="Nha Trang to Saigon"
  line_id="1"
  subline_id="s5"
  badge_color="success"
  anchor_id="title-line-1-sublines-5-a"
  direction="to south"
  line="NTR-SGO"
  trains="SNT1" %}

{% include addons/railway-sublines-table.html 
  title="Phan Thiết to Saigon"
  line_id="1"
  subline_id="s6"
  badge_color="success"
  anchor_id="title-line-1-sublines-6-a"
  direction="to south"
  line="PTH-SGO"
  trains="SPT1" %}

{% include addons/railway-sublines-table.html 
  title="Quy Nhơn to Saigon"
  line_id="1"
  subline_id="s7"
  badge_color="success"
  anchor_id="title-line-1-sublines-7-a"
  direction="to south"
  line="QNH-SGO"
  trains="SQN1" %}

{% include plugins/google-ad-responsive-horizontal-banner.html %}

---

{% include addons/railway-sublines-table.html 
  title="Saigon to Hanoi"
  line_id="1"
  subline_id="n1"
  badge_color="danger"
  anchor_id="title-line-1-sublines-1-b"
  direction="to north"
  line="SGO-HNO"
  trains="SE2,SE4,SE6,SE8,SE10" %}

{% include addons/railway-sublines-table.html 
  title="Da Nang to Hanoi"
  line_id="1"
  subline_id="n2"
  badge_color="danger"
  anchor_id="title-line-1-sublines-2-b"
  direction="to north"
  line="DNA-HNO"
  trains="SE20" %}

{% include addons/railway-sublines-table.html 
  title="Vinh to Hanoi"
  line_id="1"
  subline_id="n3"
  badge_color="danger"
  anchor_id="title-line-1-sublines-3-b"
  direction="to north"
  line="VIN-HNO"
  trains="SE36,NA2" %}

{% include addons/railway-sublines-table.html 
  title="Saigon to Hue"
  line_id="1"
  subline_id="n4"
  badge_color="danger"
  anchor_id="title-line-1-sublines-4-b"
  direction="to north"
  line="SGO-HUE"
  trains="SE22" %}

{% include addons/railway-sublines-table.html 
  title="Saigon to Nha Trang"
  line_id="1"
  subline_id="n5"
  badge_color="danger"
  anchor_id="title-line-1-sublines-5-b"
  direction="to north"
  line="SGO-NTR"
  trains="SNT2" %}

{% include addons/railway-sublines-table.html 
  title="Saigon to Phan Thiết"
  line_id="1"
  subline_id="n6"
  badge_color="danger"
  anchor_id="title-line-1-sublines-6-b"
  direction="to north"
  line="SGO-PTH"
  trains="SPT2" %}

{% include addons/railway-sublines-table.html 
  title="Saigon to Quy Nhơn"
  line_id="1"
  subline_id="n7"
  badge_color="danger"
  anchor_id="title-line-1-sublines-7-b"
  direction="to north"
  line="SGO-QNH"
  trains="SQN4" %}

{% include plugins/google-ad-responsive-horizontal-banner.html %}

---

<div id="title-line-2" class="head-title-line">
  <span class="badge badge-primary mr-2">2</span>
  <h2>Hanoi - Lào Cai Railway</h2>
</div>

<div class="meta-railway row mb-3">
  <div class="col-6">
    <img src="/assets/images/2019/vietnam-railway-line-HNO-LCA.jpg" alt="Vietnam railway Hanoi to Saigon">
  </div>
  <div class="col-6">
    <table class="table-striped">
      <tbody>
        <tr><th>Established</th><td>1906</td></tr>
        <tr><th>Length</th><td>296 km</td></tr>
        <tr><th>Gauge</th><td>Metre gauge</td></tr>
      </tbody>
    </table>
  </div>
</div>

{% include addons/railway-sublines-table.html 
  title="Hanoi to Lào Cai"
  line_id="2"
  subline_id="w1"
  badge_color="success"
  anchor_id="title-line-2-sublines-1-a"
  direction="to west"
  line="HNO-LCA"
  trains="SP1,SP3" %}

{% include addons/railway-sublines-table.html 
  title="Hanoi to Yên Bái"
  line_id="2"
  subline_id="w2"
  badge_color="success"
  anchor_id="title-line-2-sublines-2-a"
  direction="to west"
  line="HNO-YBA"
  trains="YB3" %}

{% include addons/railway-sublines-table.html 
  title="Lào Cai to Hanoi"
  line_id="2"
  subline_id="e1"
  badge_color="danger"
  anchor_id="title-line-2-sublines-1-b"
  direction="to east"
  line="LCA-HNO"
  trains="SP2,SP4" %}

{% include addons/railway-sublines-table.html 
  title="Yên Bái to Hanoi"
  line_id="2"
  subline_id="e2"
  badge_color="danger"
  anchor_id="title-line-2-sublines-2-b"
  direction="to east"
  line="YBA-HNO"
  trains="YB4" %}

---

<div id="title-line-3" class="head-title-line">
  <span class="badge badge-primary mr-2">3</span>
  <h2>Hanoi - Đồng Đăng Railway</h2>
</div>

<div class="meta-railway row mb-3">
  <div class="col-6">
    <img src="/assets/images/2019/vietnam-railway-line-HNO-DDA.jpg" alt="Vietnam railway Hanoi to Saigon">
  </div>
  <div class="col-6">
    <table class="table-striped">
      <tbody>
        <tr><th>Established</th><td>1902</td></tr>
        <tr><th>Length</th><td>163 km</td></tr>
        <tr><th>Gauge</th><td>Mixed gauge</td></tr>
      </tbody>
    </table>
  </div>
</div>

{% include addons/railway-sublines-table.html 
  title="Hanoi to Đồng Đăng"
  line_id="3"
  subline_id="n1"
  badge_color="success"
  anchor_id="title-line-3-sublines-1-a"
  direction="to north"
  line="HNO-DDA"
  trains="DD5" %}

{% include addons/railway-sublines-table.html 
  title="Đồng Đăng to Hanoi"
  line_id="3"
  subline_id="s1"
  badge_color="danger"
  anchor_id="title-line-3-sublines-1-b"
  direction="to south"
  line="DDA-HNO"
  trains="DD6" %}

---

<div id="title-line-4" class="head-title-line">
  <span class="badge badge-primary mr-2">4</span>
  <h2>Yên Viên - Hạ Long Railway</h2>
</div>

<div class="meta-railway row mb-3">
  <div class="col-6">
    <img src="/assets/images/2019/vietnam-railway-line-YVI-HLO.jpg" alt="Vietnam railway Hanoi to Saigon">
  </div>
  <div class="col-6">
    <p>This line combines Hanoi - Đồng Đăng Railway and Kép–Hạ Long Railway, connect stations between Yên Viên and Hạ Long</p>
    <table class="table-striped">
      <tbody>
        <tr><th colspan="2">Kép–Hạ Long Railway</th></tr>
        <tr><th>Established</th><td>1950s</td></tr>
        <tr><th>Length</th><td>106 km</td></tr>
        <tr><th>Gauge</th><td>Standard gauge</td></tr>
      </tbody>
    </table>
  </div>
</div>

{% include addons/railway-sublines-table.html 
  title="Yên Viên to Hạ Long"
  line_id="4"
  subline_id="e1"
  badge_color="success"
  anchor_id="title-line-4-sublines-1-a"
  direction="to east"
  line="YVI-HLO"
  trains="51501" %}

{% include addons/railway-sublines-table.html 
  title="Hạ Long to Yên Viên"
  line_id="4"
  subline_id="w1"
  badge_color="danger"
  anchor_id="title-line-4-sublines-1-b"
  direction="to west"
  line="HLO-YVI"
  trains="51502" %}

{% include plugins/google-ad-responsive-horizontal-banner.html %}

---

<div id="title-line-5" class="head-title-line">
  <span class="badge badge-primary mr-2">5</span>
  <h2>Hanoi - Haiphong Railway</h2>
</div>

<div class="meta-railway row mb-3">
  <div class="col-6">
    <img src="/assets/images/2019/vietnam-railway-line-HNO-HPH.jpg" alt="Vietnam railway Hanoi to Saigon">
  </div>
  <div class="col-6">
    <table class="table-striped">
      <tbody>
        <tr><th>Established</th><td>1902</td></tr>
        <tr><th>Length</th><td>102 km</td></tr>
        <tr><th>Gauge</th><td>Metre gauge</td></tr>
      </tbody>
    </table>
  </div>
</div>

{% include addons/railway-sublines-table.html 
  title="Hanoi to Hải Phòng"
  line_id="5"
  subline_id="e1"
  badge_color="success"
  anchor_id="title-line-5-sublines-1-a"
  direction="to east"
  line="HNO-HPH"
  trains="HP1,LP3,LP5,LP7" %}

{% include addons/railway-sublines-table.html 
  title="Hải Phòng to Hanoi"
  line_id="5"
  subline_id="w1"
  badge_color="danger"
  anchor_id="title-line-5-sublines-1-b"
  direction="to west"
  line="HPH-HNO"
  trains="HP2,LP2,LP6,LP8" %}

---

<div id="title-line-6" class="head-title-line">
  <span class="badge badge-primary mr-2">6</span>
  <h2>Hanoi - Thái Nguyên Railway</h2>
</div>

<div class="meta-railway row mb-3">
  <div class="col-6">
    <img src="/assets/images/2019/vietnam-railway-line-HNO-QTR.jpg" alt="Vietnam railway Hanoi to Saigon">
  </div>
  <div class="col-6">
    <table class="table-striped">
      <tbody>
        <tr><th>Established</th><td>1962</td></tr>
        <tr><th>Length</th><td>75 km</td></tr>
        <tr><th>Gauge</th><td>Mixed gauge</td></tr>
      </tbody>
    </table>
  </div>
</div>

{% include addons/railway-sublines-table.html 
  title="Hanoi to Quán Triều"
  line_id="6"
  subline_id="n1"
  badge_color="success"
  anchor_id="title-line-6-sublines-1-a"
  direction="to north"
  line="HNO-QTR"
  trains="QT1" %}

{% include addons/railway-sublines-table.html 
  title="Quán Triều to Hanoi"
  line_id="6"
  subline_id="s1"
  badge_color="danger"
  anchor_id="title-line-6-sublines-1-b"
  direction="to south"
  line="QTR-HNO"
  trains="QT2" %}

## Reference

* <a href="https://k.vnticketonline.vn/#/thongtinhanhtrinh/gadi" target="_blank" rel="nofollow">https://k.vnticketonline.vn</a>

<script>
const STATIONS = {"ATH":["Ấm Thượng",1],"BAS":["Bảo Sơn",1],"BBA":["Bãi Bằng",1],"BGI":["Bắc Giang",1],"BHA":["Bảo Hà",1],"BHO":["Biên Hòa",2],"BLE":["Bắc Lệ",1],"BNI":["Bắc Ninh",1],"BSN":["Bồng Sơn",2],"BSO":["Bỉm Sơn",1],"CCH":["Chí Chủ",1],"CGA":["Cẩm Giàng",1],"CSY":["Chợ Sy",1],"DLA":["Đà Lạt",1],"DAN":["Đông Anh",1],"DDA":["Đồng Đăng",2],"DHA":["Đông Hà",1],"DHO":["Đồng Hới",2],"DIA":["Dĩ An",1],"DLE":["Đồng Lê",1],"DMO":["Đồng Mỏ",1],"DNA":["Đà Nẵng",2],"DOT":["Ðông Triều",1],"DPH":["Đức Phổ",2],"DTH":["Đoan Thượng",1],"DTR":["Diêu Trì",2],"GBA":["Giáp Bát",1],"GIA":["Giã",1],"GLA":["Gia Lâm",1],"HDU":["Hải Dương",1],"HLO":["Hạ Long",1],"HNO":["Hà Nội",3],"HPH":["Hải Phòng",2],"HPO":["Hương Phố",1],"HUE":["Huế",2],"KEP":["Kép",1],"LBI":["Long Biên",1],"LCA":["Lào Cai",2],"LCO":["Lăng Cô",1],"LHA":["La Hai",1],"LIM":["Lim",1],"LKA":["Lang Khay",1],"LKH":["Long Khánh",1],"LMA":["Lan Mẫu",1],"LSO":["Lạng Sơn",1],"LTH":["Lâm Thao",1],"LXA":["Lưu Xá",1],"MAA":["Mậu A",1],"MAK":["Mạo Khê",1],"MDU":["Mỹ Đức",1],"MKH":["Minh Khôi",1],"MLE":["Minh Lễ",1],"MMA":["Bình Thuận",1],"NBA":["Ngã Ba",1],"NBI":["Ninh Bình",1],"NDI":["Nam Định",1],"NHO":["Ninh Hoà",1],"NTH":["Núi Thành",2],"NTR":["Nha Trang",2],"PCG":["Phú Cang",1],"PDU":["Phủ Đức",1],"PHI":["Phú Hiệp",1],"PHY":["Phổ Yên",1],"PLU":["Phố Lu",1],"PLY":["Phủ Lý",1],"PTA":["Phú Thái",1],"PTH":["Phan Thiết",2],"PTO":["Phú Thọ",1],"PTR":["Phố Tráng",1],"PVI":["Phố Vị",1],"PYE":["Phúc Yên",1],"PHA":["Pom Hán",1],"QNG":["Quảng Ngãi",2],"QNH":["Quy Nhơn",1],"QTR":["Quán Triều",1],"SGO":["Sài Gòn",3],"SHO":["Sen Hồ",1],"SKI":["Suối Kiết",1],"SMA":["Sông Mao",1],"STH":["Sóng Thần",1],"TCH":["Tháp Chàm",2],"THA":["Tuy Hoà",1],"THL":["Thượng Lý",1],"THO":["Thanh Hoá",1],"THU":["Trái Hút",1],"TKE":["Tiên Kiên",1],"TKI":["Trà Kiệu",2],"TMA":["Trại Mát",1],"TKY":["Tam Kỳ",2],"TNG":["Thái Nguyên",1],"TSO":["Từ Sơn",1],"UBI":["Uông Bí",1],"VEN":["Vũ Ẻn",1],"VIN":["Vinh",2],"VTR":["Việt Trì",1],"VYE":["Vĩnh Yên",1],"YBA":["Yên Bái",1],"YCU":["Yên Cư",1],"YTR":["Yên Trung",1],"YVI":["Yên Viên",1]};
const TRAINS = {"51501":[{"station":"YVI","arrived_at":"04:55","launched_at":"04:55","arrived_duration":295,"launched_duration":295,"distance":0,"number_of_days":0},{"station":"TSO","arrived_at":"05:07","launched_at":"05:15","arrived_duration":307,"launched_duration":315,"distance":6,"number_of_days":0},{"station":"BNI","arrived_at":"05:34","launched_at":"05:37","arrived_duration":334,"launched_duration":337,"distance":18,"number_of_days":0},{"station":"BGI","arrived_at":"06:09","launched_at":"06:12","arrived_duration":369,"launched_duration":372,"distance":38,"number_of_days":0},{"station":"PTR","arrived_at":"06:28","launched_at":"06:30","arrived_duration":388,"launched_duration":390,"distance":48,"number_of_days":0},{"station":"KEP","arrived_at":"06:46","launched_at":"07:16","arrived_duration":406,"launched_duration":436,"distance":58,"number_of_days":0},{"station":"BAS","arrived_at":"07:36","launched_at":"07:39","arrived_duration":456,"launched_duration":459,"distance":66,"number_of_days":0},{"station":"LMA","arrived_at":"07:58","launched_at":"08:01","arrived_duration":478,"launched_duration":481,"distance":75,"number_of_days":0},{"station":"DOT","arrived_at":"09:13","launched_at":"09:16","arrived_duration":553,"launched_duration":556,"distance":107,"number_of_days":0},{"station":"MAK","arrived_at":"09:35","launched_at":"09:50","arrived_duration":575,"launched_duration":590,"distance":116,"number_of_days":0},{"station":"UBI","arrived_at":"10:24","launched_at":"10:26","arrived_duration":624,"launched_duration":626,"distance":132,"number_of_days":0},{"station":"YCU","arrived_at":"11:08","launched_at":"11:10","arrived_duration":668,"launched_duration":670,"distance":152,"number_of_days":0},{"station":"HLO","arrived_at":"11:41","launched_at":"11:41","arrived_duration":701,"launched_duration":701,"distance":164,"number_of_days":0}],"51502":[{"station":"HLO","arrived_at":"13:50","launched_at":"13:50","arrived_duration":830,"launched_duration":830,"distance":0,"number_of_days":0},{"station":"YCU","arrived_at":"14:21","launched_at":"14:23","arrived_duration":861,"launched_duration":863,"distance":12,"number_of_days":0},{"station":"UBI","arrived_at":"15:04","launched_at":"15:06","arrived_duration":904,"launched_duration":906,"distance":32,"number_of_days":0},{"station":"MAK","arrived_at":"15:40","launched_at":"16:00","arrived_duration":940,"launched_duration":960,"distance":48,"number_of_days":0},{"station":"DOT","arrived_at":"16:19","launched_at":"16:21","arrived_duration":979,"launched_duration":981,"distance":57,"number_of_days":0},{"station":"LMA","arrived_at":"17:33","launched_at":"17:35","arrived_duration":1053,"launched_duration":1055,"distance":89,"number_of_days":0},{"station":"BAS","arrived_at":"17:55","launched_at":"17:57","arrived_duration":1075,"launched_duration":1077,"distance":98,"number_of_days":0},{"station":"KEP","arrived_at":"18:17","launched_at":"18:47","arrived_duration":1097,"launched_duration":1127,"distance":106,"number_of_days":0},{"station":"PTR","arrived_at":"19:03","launched_at":"19:05","arrived_duration":1143,"launched_duration":1145,"distance":116,"number_of_days":0},{"station":"BGI","arrived_at":"19:21","launched_at":"19:24","arrived_duration":1161,"launched_duration":1164,"distance":126,"number_of_days":0},{"station":"BNI","arrived_at":"19:56","launched_at":"19:58","arrived_duration":1196,"launched_duration":1198,"distance":146,"number_of_days":0},{"station":"TSO","arrived_at":"20:17","launched_at":"20:19","arrived_duration":1217,"launched_duration":1219,"distance":158,"number_of_days":0},{"station":"YVI","arrived_at":"20:31","launched_at":"20:31","arrived_duration":1231,"launched_duration":1231,"distance":164,"number_of_days":0}],"DD5":[{"station":"HNO","arrived_at":"07:05","launched_at":"07:05","arrived_duration":425,"launched_duration":425,"distance":0,"number_of_days":0},{"station":"LBI","arrived_at":"07:13","launched_at":"07:16","arrived_duration":433,"launched_duration":436,"distance":2,"number_of_days":0},{"station":"GLA","arrived_at":"07:24","launched_at":"07:29","arrived_duration":444,"launched_duration":449,"distance":5,"number_of_days":0},{"station":"YVI","arrived_at":"07:41","launched_at":"07:43","arrived_duration":461,"launched_duration":463,"distance":11,"number_of_days":0},{"station":"TSO","arrived_at":"07:51","launched_at":"07:53","arrived_duration":471,"launched_duration":473,"distance":17,"number_of_days":0},{"station":"LIM","arrived_at":"08:01","launched_at":"08:03","arrived_duration":481,"launched_duration":483,"distance":24,"number_of_days":0},{"station":"BNI","arrived_at":"08:10","launched_at":"08:12","arrived_duration":490,"launched_duration":492,"distance":29,"number_of_days":0},{"station":"SHO","arrived_at":"08:25","launched_at":"08:27","arrived_duration":505,"launched_duration":507,"distance":39,"number_of_days":0},{"station":"BGI","arrived_at":"08:38","launched_at":"08:40","arrived_duration":518,"launched_duration":520,"distance":49,"number_of_days":0},{"station":"KEP","arrived_at":"09:00","launched_at":"09:02","arrived_duration":540,"launched_duration":542,"distance":69,"number_of_days":0},{"station":"PVI","arrived_at":"09:26","launched_at":"09:28","arrived_duration":566,"launched_duration":568,"distance":81,"number_of_days":0},{"station":"BLE","arrived_at":"09:42","launched_at":"09:44","arrived_duration":582,"launched_duration":584,"distance":89,"number_of_days":0},{"station":"DMO","arrived_at":"10:19","launched_at":"10:21","arrived_duration":619,"launched_duration":621,"distance":113,"number_of_days":0},{"station":"LSO","arrived_at":"11:18","launched_at":"11:20","arrived_duration":678,"launched_duration":680,"distance":149,"number_of_days":0},{"station":"DDA","arrived_at":"11:40","launched_at":"11:40","arrived_duration":700,"launched_duration":700,"distance":162,"number_of_days":0}],"DD6":[{"station":"DDA","arrived_at":"15:10","launched_at":"15:10","arrived_duration":910,"launched_duration":910,"distance":0,"number_of_days":0},{"station":"LSO","arrived_at":"15:28","launched_at":"15:30","arrived_duration":928,"launched_duration":930,"distance":13,"number_of_days":0},{"station":"DMO","arrived_at":"16:19","launched_at":"16:21","arrived_duration":979,"launched_duration":981,"distance":49,"number_of_days":0},{"station":"BLE","arrived_at":"16:58","launched_at":"17:00","arrived_duration":1018,"launched_duration":1020,"distance":73,"number_of_days":0},{"station":"PVI","arrived_at":"17:14","launched_at":"17:16","arrived_duration":1034,"launched_duration":1036,"distance":81,"number_of_days":0},{"station":"KEP","arrived_at":"17:43","launched_at":"17:45","arrived_duration":1063,"launched_duration":1065,"distance":93,"number_of_days":0},{"station":"BGI","arrived_at":"18:06","launched_at":"18:08","arrived_duration":1086,"launched_duration":1088,"distance":113,"number_of_days":0},{"station":"SHO","arrived_at":"18:20","launched_at":"18:22","arrived_duration":1100,"launched_duration":1102,"distance":123,"number_of_days":0},{"station":"BNI","arrived_at":"18:35","launched_at":"18:37","arrived_duration":1115,"launched_duration":1117,"distance":133,"number_of_days":0},{"station":"LIM","arrived_at":"18:44","launched_at":"18:46","arrived_duration":1124,"launched_duration":1126,"distance":138,"number_of_days":0},{"station":"TSO","arrived_at":"18:56","launched_at":"18:58","arrived_duration":1136,"launched_duration":1138,"distance":145,"number_of_days":0},{"station":"YVI","arrived_at":"19:08","launched_at":"19:10","arrived_duration":1148,"launched_duration":1150,"distance":151,"number_of_days":0},{"station":"GLA","arrived_at":"19:23","launched_at":"19:26","arrived_duration":1163,"launched_duration":1166,"distance":157,"number_of_days":0},{"station":"LBI","arrived_at":"19:34","launched_at":"19:37","arrived_duration":1174,"launched_duration":1177,"distance":160,"number_of_days":0},{"station":"HNO","arrived_at":"19:45","launched_at":"19:45","arrived_duration":1185,"launched_duration":1185,"distance":162,"number_of_days":0}],"HP1":[{"station":"HNO","arrived_at":"06:00","launched_at":"06:00","arrived_duration":360,"launched_duration":360,"distance":0,"number_of_days":0},{"station":"GLA","arrived_at":"06:14","launched_at":"06:16","arrived_duration":374,"launched_duration":376,"distance":5,"number_of_days":0},{"station":"CGA","arrived_at":"06:54","launched_at":"06:56","arrived_duration":414,"launched_duration":416,"distance":40,"number_of_days":0},{"station":"HDU","arrived_at":"07:15","launched_at":"07:20","arrived_duration":435,"launched_duration":440,"distance":57,"number_of_days":0},{"station":"PTA","arrived_at":"07:46","launched_at":"07:48","arrived_duration":466,"launched_duration":468,"distance":78,"number_of_days":0},{"station":"THL","arrived_at":"08:13","launched_at":"08:15","arrived_duration":493,"launched_duration":495,"distance":98,"number_of_days":0},{"station":"HPH","arrived_at":"08:25","launched_at":"08:25","arrived_duration":505,"launched_duration":505,"distance":102,"number_of_days":0}],"HP2":[{"station":"HPH","arrived_at":"18:40","launched_at":"18:40","arrived_duration":1120,"launched_duration":1120,"distance":0,"number_of_days":0},{"station":"THL","arrived_at":"18:50","launched_at":"18:52","arrived_duration":1130,"launched_duration":1132,"distance":4,"number_of_days":0},{"station":"PTA","arrived_at":"19:14","launched_at":"19:16","arrived_duration":1154,"launched_duration":1156,"distance":24,"number_of_days":0},{"station":"HDU","arrived_at":"19:41","launched_at":"19:46","arrived_duration":1181,"launched_duration":1186,"distance":45,"number_of_days":0},{"station":"CGA","arrived_at":"20:05","launched_at":"20:07","arrived_duration":1205,"launched_duration":1207,"distance":62,"number_of_days":0},{"station":"GLA","arrived_at":"20:48","launched_at":"20:51","arrived_duration":1248,"launched_duration":1251,"distance":97,"number_of_days":0},{"station":"HNO","arrived_at":"21:06","launched_at":"21:06","arrived_duration":1266,"launched_duration":1266,"distance":102,"number_of_days":0}],"LP2":[{"station":"HPH","arrived_at":"06:10","launched_at":"06:10","arrived_duration":370,"launched_duration":370,"distance":0,"number_of_days":0},{"station":"THL","arrived_at":"06:20","launched_at":"06:22","arrived_duration":380,"launched_duration":382,"distance":4,"number_of_days":0},{"station":"PTA","arrived_at":"06:44","launched_at":"06:46","arrived_duration":404,"launched_duration":406,"distance":24,"number_of_days":0},{"station":"HDU","arrived_at":"07:12","launched_at":"07:18","arrived_duration":432,"launched_duration":438,"distance":45,"number_of_days":0},{"station":"CGA","arrived_at":"07:38","launched_at":"07:40","arrived_duration":458,"launched_duration":460,"distance":62,"number_of_days":0},{"station":"GLA","arrived_at":"08:20","launched_at":"08:27","arrived_duration":500,"launched_duration":507,"distance":97,"number_of_days":0},{"station":"LBI","arrived_at":"08:35","launched_at":"08:38","arrived_duration":515,"launched_duration":518,"distance":100,"number_of_days":0},{"station":"HNO","arrived_at":"08:46","launched_at":"08:46","arrived_duration":526,"launched_duration":526,"distance":102,"number_of_days":0}],"LP3":[{"station":"HNO","arrived_at":"09:17","launched_at":"09:17","arrived_duration":557,"launched_duration":557,"distance":0,"number_of_days":0},{"station":"LBI","arrived_at":"09:25","launched_at":"09:28","arrived_duration":565,"launched_duration":568,"distance":2,"number_of_days":0},{"station":"GLA","arrived_at":"09:36","launched_at":"09:48","arrived_duration":576,"launched_duration":588,"distance":5,"number_of_days":0},{"station":"CGA","arrived_at":"10:25","launched_at":"10:31","arrived_duration":625,"launched_duration":631,"distance":40,"number_of_days":0},{"station":"HDU","arrived_at":"10:50","launched_at":"10:53","arrived_duration":650,"launched_duration":653,"distance":57,"number_of_days":0},{"station":"PTA","arrived_at":"11:19","launched_at":"11:21","arrived_duration":679,"launched_duration":681,"distance":78,"number_of_days":0},{"station":"THL","arrived_at":"11:46","launched_at":"11:48","arrived_duration":706,"launched_duration":708,"distance":98,"number_of_days":0},{"station":"HPH","arrived_at":"12:00","launched_at":"12:00","arrived_duration":720,"launched_duration":720,"distance":102,"number_of_days":0}],"LP5":[{"station":"HNO","arrived_at":"15:20","launched_at":"15:20","arrived_duration":920,"launched_duration":920,"distance":0,"number_of_days":0},{"station":"LBI","arrived_at":"15:27","launched_at":"15:30","arrived_duration":927,"launched_duration":930,"distance":2,"number_of_days":0},{"station":"GLA","arrived_at":"15:38","launched_at":"15:45","arrived_duration":938,"launched_duration":945,"distance":5,"number_of_days":0},{"station":"CGA","arrived_at":"16:22","launched_at":"16:28","arrived_duration":982,"launched_duration":988,"distance":40,"number_of_days":0},{"station":"HDU","arrived_at":"16:48","launched_at":"16:52","arrived_duration":1008,"launched_duration":1012,"distance":57,"number_of_days":0},{"station":"PTA","arrived_at":"17:19","launched_at":"17:21","arrived_duration":1039,"launched_duration":1041,"distance":78,"number_of_days":0},{"station":"THL","arrived_at":"17:46","launched_at":"17:48","arrived_duration":1066,"launched_duration":1068,"distance":98,"number_of_days":0},{"station":"HPH","arrived_at":"18:00","launched_at":"18:00","arrived_duration":1080,"launched_duration":1080,"distance":102,"number_of_days":0}],"LP6":[{"station":"HPH","arrived_at":"09:05","launched_at":"09:05","arrived_duration":545,"launched_duration":545,"distance":0,"number_of_days":0},{"station":"THL","arrived_at":"09:15","launched_at":"09:17","arrived_duration":555,"launched_duration":557,"distance":4,"number_of_days":0},{"station":"PTA","arrived_at":"09:39","launched_at":"09:41","arrived_duration":579,"launched_duration":581,"distance":24,"number_of_days":0},{"station":"HDU","arrived_at":"10:05","launched_at":"10:08","arrived_duration":605,"launched_duration":608,"distance":45,"number_of_days":0},{"station":"CGA","arrived_at":"10:28","launched_at":"10:33","arrived_duration":628,"launched_duration":633,"distance":62,"number_of_days":0},{"station":"GLA","arrived_at":"11:14","launched_at":"11:21","arrived_duration":674,"launched_duration":681,"distance":97,"number_of_days":0},{"station":"LBI","arrived_at":"11:29","launched_at":"11:32","arrived_duration":689,"launched_duration":692,"distance":100,"number_of_days":0},{"station":"HNO","arrived_at":"11:40","launched_at":"11:40","arrived_duration":700,"launched_duration":700,"distance":102,"number_of_days":0}],"LP7":[{"station":"HNO","arrived_at":"18:15","launched_at":"18:15","arrived_duration":1095,"launched_duration":1095,"distance":0,"number_of_days":0},{"station":"LBI","arrived_at":"18:23","launched_at":"18:26","arrived_duration":1103,"launched_duration":1106,"distance":2,"number_of_days":0},{"station":"GLA","arrived_at":"18:34","launched_at":"18:46","arrived_duration":1114,"launched_duration":1126,"distance":5,"number_of_days":0},{"station":"CGA","arrived_at":"19:22","launched_at":"19:24","arrived_duration":1162,"launched_duration":1164,"distance":40,"number_of_days":0},{"station":"HDU","arrived_at":"19:44","launched_at":"19:49","arrived_duration":1184,"launched_duration":1189,"distance":57,"number_of_days":0},{"station":"PTA","arrived_at":"20:15","launched_at":"20:17","arrived_duration":1215,"launched_duration":1217,"distance":78,"number_of_days":0},{"station":"THL","arrived_at":"20:42","launched_at":"20:44","arrived_duration":1242,"launched_duration":1244,"distance":98,"number_of_days":0},{"station":"HPH","arrived_at":"20:55","launched_at":"20:55","arrived_duration":1255,"launched_duration":1255,"distance":102,"number_of_days":0}],"LP8":[{"station":"HPH","arrived_at":"15:00","launched_at":"15:00","arrived_duration":900,"launched_duration":900,"distance":0,"number_of_days":0},{"station":"THL","arrived_at":"15:10","launched_at":"15:12","arrived_duration":910,"launched_duration":912,"distance":4,"number_of_days":0},{"station":"PTA","arrived_at":"15:34","launched_at":"15:37","arrived_duration":934,"launched_duration":937,"distance":24,"number_of_days":0},{"station":"HDU","arrived_at":"16:02","launched_at":"16:05","arrived_duration":962,"launched_duration":965,"distance":45,"number_of_days":0},{"station":"CGA","arrived_at":"16:25","launched_at":"16:31","arrived_duration":985,"launched_duration":991,"distance":62,"number_of_days":0},{"station":"GLA","arrived_at":"17:12","launched_at":"17:19","arrived_duration":1032,"launched_duration":1039,"distance":97,"number_of_days":0},{"station":"LBI","arrived_at":"17:27","launched_at":"17:30","arrived_duration":1047,"launched_duration":1050,"distance":100,"number_of_days":0},{"station":"HNO","arrived_at":"17:38","launched_at":"17:38","arrived_duration":1058,"launched_duration":1058,"distance":102,"number_of_days":0}],"NA1":[{"station":"HNO","arrived_at":"22:45","launched_at":"22:45","arrived_duration":1365,"launched_duration":1365,"distance":0,"number_of_days":0},{"station":"NDI","arrived_at":"00:22","launched_at":"00:25","arrived_duration":1462,"launched_duration":1465,"distance":87,"number_of_days":1},{"station":"THO","arrived_at":"02:51","launched_at":"02:54","arrived_duration":1611,"launched_duration":1614,"distance":175,"number_of_days":1},{"station":"CSY","arrived_at":"04:38","launched_at":"04:41","arrived_duration":1718,"launched_duration":1721,"distance":279,"number_of_days":1},{"station":"VIN","arrived_at":"05:20","launched_at":"05:20","arrived_duration":1760,"launched_duration":1760,"distance":319,"number_of_days":1}],"NA2":[{"station":"VIN","arrived_at":"22:05","launched_at":"22:05","arrived_duration":1325,"launched_duration":1325,"distance":0,"number_of_days":0},{"station":"CSY","arrived_at":"22:45","launched_at":"22:48","arrived_duration":1365,"launched_duration":1368,"distance":40,"number_of_days":0},{"station":"HNO","arrived_at":"05:10","launched_at":"05:10","arrived_duration":1750,"launched_duration":1750,"distance":319,"number_of_days":1}],"QT1":[{"station":"HNO","arrived_at":"16:20","launched_at":"16:20","arrived_duration":980,"launched_duration":980,"distance":0,"number_of_days":0},{"station":"LBI","arrived_at":"16:27","launched_at":"16:30","arrived_duration":987,"launched_duration":990,"distance":2,"number_of_days":0},{"station":"GLA","arrived_at":"16:38","launched_at":"16:43","arrived_duration":998,"launched_duration":1003,"distance":5,"number_of_days":0},{"station":"YVI","arrived_at":"16:53","launched_at":"16:55","arrived_duration":1013,"launched_duration":1015,"distance":11,"number_of_days":0},{"station":"DAN","arrived_at":"17:12","launched_at":"17:14","arrived_duration":1032,"launched_duration":1034,"distance":21,"number_of_days":0},{"station":"PHY","arrived_at":"17:46","launched_at":"17:48","arrived_duration":1066,"launched_duration":1068,"distance":51,"number_of_days":0},{"station":"LXA","arrived_at":"18:07","launched_at":"18:09","arrived_duration":1087,"launched_duration":1089,"distance":68,"number_of_days":0},{"station":"TNG","arrived_at":"18:18","launched_at":"18:23","arrived_duration":1098,"launched_duration":1103,"distance":74,"number_of_days":0},{"station":"QTR","arrived_at":"18:30","launched_at":"18:30","arrived_duration":1110,"launched_duration":1110,"distance":75,"number_of_days":0}],"QT2":[{"station":"QTR","arrived_at":"05:40","launched_at":"05:40","arrived_duration":340,"launched_duration":340,"distance":0,"number_of_days":0},{"station":"TNG","arrived_at":"05:45","launched_at":"05:49","arrived_duration":345,"launched_duration":349,"distance":1,"number_of_days":0},{"station":"LXA","arrived_at":"05:58","launched_at":"06:00","arrived_duration":358,"launched_duration":360,"distance":7,"number_of_days":0},{"station":"PHY","arrived_at":"06:19","launched_at":"06:21","arrived_duration":379,"launched_duration":381,"distance":24,"number_of_days":0},{"station":"DAN","arrived_at":"06:53","launched_at":"06:55","arrived_duration":413,"launched_duration":415,"distance":54,"number_of_days":0},{"station":"YVI","arrived_at":"07:13","launched_at":"07:15","arrived_duration":433,"launched_duration":435,"distance":64,"number_of_days":0},{"station":"GLA","arrived_at":"07:27","launched_at":"07:35","arrived_duration":447,"launched_duration":455,"distance":70,"number_of_days":0},{"station":"LBI","arrived_at":"07:44","launched_at":"07:47","arrived_duration":464,"launched_duration":467,"distance":73,"number_of_days":0},{"station":"HNO","arrived_at":"07:55","launched_at":"07:55","arrived_duration":475,"launched_duration":475,"distance":75,"number_of_days":0}],"SE1":[{"station":"HNO","arrived_at":"22:20","launched_at":"22:20","arrived_duration":1340,"launched_duration":1340,"distance":0,"number_of_days":0},{"station":"PLY","arrived_at":"23:22","launched_at":"23:25","arrived_duration":1402,"launched_duration":1405,"distance":56,"number_of_days":0},{"station":"NDI","arrived_at":"23:56","launched_at":"23:59","arrived_duration":1436,"launched_duration":1439,"distance":87,"number_of_days":0},{"station":"THO","arrived_at":"01:25","launched_at":"01:31","arrived_duration":1525,"launched_duration":1531,"distance":175,"number_of_days":1},{"station":"VIN","arrived_at":"03:42","launched_at":"03:56","arrived_duration":1662,"launched_duration":1676,"distance":319,"number_of_days":1},{"station":"YTR","arrived_at":"04:19","launched_at":"04:22","arrived_duration":1699,"launched_duration":1702,"distance":340,"number_of_days":1},{"station":"HPO","arrived_at":"05:16","launched_at":"05:19","arrived_duration":1756,"launched_duration":1759,"distance":387,"number_of_days":1},{"station":"DHO","arrived_at":"07:52","launched_at":"08:04","arrived_duration":1912,"launched_duration":1924,"distance":522,"number_of_days":1},{"station":"DHA","arrived_at":"09:39","launched_at":"09:42","arrived_duration":2019,"launched_duration":2022,"distance":622,"number_of_days":1},{"station":"HUE","arrived_at":"10:52","launched_at":"10:59","arrived_duration":2092,"launched_duration":2099,"distance":688,"number_of_days":1},{"station":"DNA","arrived_at":"13:25","launched_at":"13:45","arrived_duration":2245,"launched_duration":2265,"distance":791,"number_of_days":1},{"station":"TKY","arrived_at":"14:53","launched_at":"14:56","arrived_duration":2333,"launched_duration":2336,"distance":865,"number_of_days":1},{"station":"QNG","arrived_at":"15:56","launched_at":"16:01","arrived_duration":2396,"launched_duration":2401,"distance":928,"number_of_days":1},{"station":"DTR","arrived_at":"18:36","launched_at":"18:51","arrived_duration":2556,"launched_duration":2571,"distance":1096,"number_of_days":1},{"station":"THA","arrived_at":"20:26","launched_at":"20:29","arrived_duration":2666,"launched_duration":2669,"distance":1198,"number_of_days":1},{"station":"NTR","arrived_at":"22:19","launched_at":"22:26","arrived_duration":2779,"launched_duration":2786,"distance":1315,"number_of_days":1},{"station":"MMA","arrived_at":"02:32","launched_at":"02:37","arrived_duration":3032,"launched_duration":3037,"distance":1551,"number_of_days":2},{"station":"BHO","arrived_at":"05:04","launched_at":"05:07","arrived_duration":3184,"launched_duration":3187,"distance":1697,"number_of_days":2},{"station":"SGO","arrived_at":"05:45","launched_at":"05:45","arrived_duration":3225,"launched_duration":3225,"distance":1726,"number_of_days":2}],"SE10":[{"station":"SGO","arrived_at":"14:40","launched_at":"14:40","arrived_duration":880,"launched_duration":880,"distance":0,"number_of_days":0},{"station":"DIA","arrived_at":"15:08","launched_at":"15:11","arrived_duration":908,"launched_duration":911,"distance":19,"number_of_days":0},{"station":"BHO","arrived_at":"15:22","launched_at":"15:28","arrived_duration":922,"launched_duration":928,"distance":29,"number_of_days":0},{"station":"LKH","arrived_at":"16:27","launched_at":"16:30","arrived_duration":987,"launched_duration":990,"distance":77,"number_of_days":0},{"station":"SKI","arrived_at":"17:24","launched_at":"17:27","arrived_duration":1044,"launched_duration":1047,"distance":123,"number_of_days":0},{"station":"MMA","arrived_at":"18:37","launched_at":"18:42","arrived_duration":1117,"launched_duration":1122,"distance":175,"number_of_days":0},{"station":"SMA","arrived_at":"19:41","launched_at":"19:44","arrived_duration":1181,"launched_duration":1184,"distance":242,"number_of_days":0},{"station":"TCH","arrived_at":"21:21","launched_at":"21:24","arrived_duration":1281,"launched_duration":1284,"distance":318,"number_of_days":0},{"station":"NTR","arrived_at":"23:44","launched_at":"23:51","arrived_duration":1424,"launched_duration":1431,"distance":411,"number_of_days":0},{"station":"NHO","arrived_at":"00:28","launched_at":"00:31","arrived_duration":1468,"launched_duration":1471,"distance":445,"number_of_days":1},{"station":"THA","arrived_at":"01:54","launched_at":"01:57","arrived_duration":1554,"launched_duration":1557,"distance":528,"number_of_days":1},{"station":"DTR","arrived_at":"03:33","launched_at":"03:48","arrived_duration":1653,"launched_duration":1668,"distance":630,"number_of_days":1},{"station":"BSN","arrived_at":"05:14","launched_at":"05:28","arrived_duration":1754,"launched_duration":1768,"distance":709,"number_of_days":1},{"station":"DPH","arrived_at":"06:15","launched_at":"06:18","arrived_duration":1815,"launched_duration":1818,"distance":758,"number_of_days":1},{"station":"QNG","arrived_at":"07:00","launched_at":"07:03","arrived_duration":1860,"launched_duration":1863,"distance":798,"number_of_days":1},{"station":"NTH","arrived_at":"07:42","launched_at":"07:45","arrived_duration":1902,"launched_duration":1905,"distance":836,"number_of_days":1},{"station":"TKY","arrived_at":"08:12","launched_at":"08:15","arrived_duration":1932,"launched_duration":1935,"distance":861,"number_of_days":1},{"station":"TKI","arrived_at":"09:03","launched_at":"09:05","arrived_duration":1983,"launched_duration":1985,"distance":901,"number_of_days":1},{"station":"DNA","arrived_at":"09:48","launched_at":"10:03","arrived_duration":2028,"launched_duration":2043,"distance":935,"number_of_days":1},{"station":"HUE","arrived_at":"12:58","launched_at":"13:05","arrived_duration":2218,"launched_duration":2225,"distance":1038,"number_of_days":1},{"station":"DHA","arrived_at":"14:19","launched_at":"14:22","arrived_duration":2299,"launched_duration":2302,"distance":1104,"number_of_days":1},{"station":"DHO","arrived_at":"16:04","launched_at":"16:25","arrived_duration":2404,"launched_duration":2425,"distance":1204,"number_of_days":1},{"station":"DLE","arrived_at":"18:06","launched_at":"18:09","arrived_duration":2526,"launched_duration":2529,"distance":1290,"number_of_days":1},{"station":"HPO","arrived_at":"19:11","launched_at":"19:14","arrived_duration":2591,"launched_duration":2594,"distance":1339,"number_of_days":1},{"station":"YTR","arrived_at":"20:08","launched_at":"20:11","arrived_duration":2648,"launched_duration":2651,"distance":1386,"number_of_days":1},{"station":"VIN","arrived_at":"20:34","launched_at":"20:58","arrived_duration":2674,"launched_duration":2698,"distance":1407,"number_of_days":1},{"station":"CSY","arrived_at":"21:38","launched_at":"21:41","arrived_duration":2738,"launched_duration":2741,"distance":1447,"number_of_days":1},{"station":"MKH","arrived_at":"23:00","launched_at":"23:19","arrived_duration":2820,"launched_duration":2839,"distance":1529,"number_of_days":1},{"station":"THO","arrived_at":"00:05","launched_at":"00:11","arrived_duration":2885,"launched_duration":2891,"distance":1551,"number_of_days":2},{"station":"NDI","arrived_at":"02:13","launched_at":"02:16","arrived_duration":3013,"launched_duration":3016,"distance":1639,"number_of_days":2},{"station":"HNO","arrived_at":"03:55","launched_at":"03:55","arrived_duration":3115,"launched_duration":3115,"distance":1726,"number_of_days":2}],"SE19":[{"station":"HNO","arrived_at":"20:10","launched_at":"20:10","arrived_duration":1210,"launched_duration":1210,"distance":0,"number_of_days":0},{"station":"NDI","arrived_at":"21:47","launched_at":"21:50","arrived_duration":1307,"launched_duration":1310,"distance":87,"number_of_days":0},{"station":"NBI","arrived_at":"22:22","launched_at":"22:25","arrived_duration":1342,"launched_duration":1345,"distance":115,"number_of_days":0},{"station":"THO","arrived_at":"23:31","launched_at":"23:34","arrived_duration":1411,"launched_duration":1414,"distance":175,"number_of_days":0},{"station":"VIN","arrived_at":"02:02","launched_at":"02:07","arrived_duration":1562,"launched_duration":1567,"distance":319,"number_of_days":1},{"station":"DHO","arrived_at":"05:59","launched_at":"06:14","arrived_duration":1799,"launched_duration":1814,"distance":522,"number_of_days":1},{"station":"DHA","arrived_at":"08:11","launched_at":"08:14","arrived_duration":1931,"launched_duration":1934,"distance":622,"number_of_days":1},{"station":"HUE","arrived_at":"09:26","launched_at":"09:31","arrived_duration":2006,"launched_duration":2011,"distance":688,"number_of_days":1},{"station":"DNA","arrived_at":"12:20","launched_at":"12:20","arrived_duration":2180,"launched_duration":2180,"distance":791,"number_of_days":1}],"SE2":[{"station":"SGO","arrived_at":"21:55","launched_at":"21:55","arrived_duration":1315,"launched_duration":1315,"distance":0,"number_of_days":0},{"station":"BHO","arrived_at":"22:31","launched_at":"22:34","arrived_duration":1351,"launched_duration":1354,"distance":29,"number_of_days":0},{"station":"MMA","arrived_at":"01:05","launched_at":"01:10","arrived_duration":1505,"launched_duration":1510,"distance":175,"number_of_days":1},{"station":"TCH","arrived_at":"03:16","launched_at":"03:19","arrived_duration":1636,"launched_duration":1639,"distance":318,"number_of_days":1},{"station":"NTR","arrived_at":"04:47","launched_at":"04:54","arrived_duration":1727,"launched_duration":1734,"distance":411,"number_of_days":1},{"station":"THA","arrived_at":"06:48","launched_at":"06:51","arrived_duration":1848,"launched_duration":1851,"distance":528,"number_of_days":1},{"station":"DTR","arrived_at":"08:27","launched_at":"08:39","arrived_duration":1947,"launched_duration":1959,"distance":630,"number_of_days":1},{"station":"QNG","arrived_at":"11:17","launched_at":"11:22","arrived_duration":2117,"launched_duration":2122,"distance":798,"number_of_days":1},{"station":"TKY","arrived_at":"12:24","launched_at":"12:27","arrived_duration":2184,"launched_duration":2187,"distance":861,"number_of_days":1},{"station":"DNA","arrived_at":"13:35","launched_at":"13:55","arrived_duration":2255,"launched_duration":2275,"distance":935,"number_of_days":1},{"station":"HUE","arrived_at":"16:19","launched_at":"16:26","arrived_duration":2419,"launched_duration":2426,"distance":1038,"number_of_days":1},{"station":"DHA","arrived_at":"17:38","launched_at":"17:41","arrived_duration":2498,"launched_duration":2501,"distance":1104,"number_of_days":1},{"station":"DHO","arrived_at":"19:20","launched_at":"19:40","arrived_duration":2600,"launched_duration":2620,"distance":1204,"number_of_days":1},{"station":"DLE","arrived_at":"21:13","launched_at":"21:16","arrived_duration":2713,"launched_duration":2716,"distance":1290,"number_of_days":1},{"station":"HPO","arrived_at":"22:16","launched_at":"22:19","arrived_duration":2776,"launched_duration":2779,"distance":1339,"number_of_days":1},{"station":"VIN","arrived_at":"23:35","launched_at":"23:42","arrived_duration":2855,"launched_duration":2862,"distance":1407,"number_of_days":1},{"station":"THO","arrived_at":"02:14","launched_at":"02:17","arrived_duration":3014,"launched_duration":3017,"distance":1551,"number_of_days":2},{"station":"NBI","arrived_at":"03:17","launched_at":"03:20","arrived_duration":3077,"launched_duration":3080,"distance":1611,"number_of_days":2},{"station":"NDI","arrived_at":"03:49","launched_at":"03:52","arrived_duration":3109,"launched_duration":3112,"distance":1639,"number_of_days":2},{"station":"PLY","arrived_at":"04:23","launched_at":"04:26","arrived_duration":3143,"launched_duration":3146,"distance":1670,"number_of_days":2},{"station":"HNO","arrived_at":"05:30","launched_at":"05:30","arrived_duration":3210,"launched_duration":3210,"distance":1726,"number_of_days":2}],"SE20":[{"station":"DNA","arrived_at":"18:45","launched_at":"18:45","arrived_duration":1125,"launched_duration":1125,"distance":0,"number_of_days":0},{"station":"HUE","arrived_at":"21:24","launched_at":"21:31","arrived_duration":1284,"launched_duration":1291,"distance":103,"number_of_days":0},{"station":"DHA","arrived_at":"22:53","launched_at":"22:56","arrived_duration":1373,"launched_duration":1376,"distance":169,"number_of_days":0},{"station":"DHO","arrived_at":"00:38","launched_at":"00:53","arrived_duration":1478,"launched_duration":1493,"distance":269,"number_of_days":1},{"station":"YTR","arrived_at":"05:08","launched_at":"05:11","arrived_duration":1748,"launched_duration":1751,"distance":451,"number_of_days":1},{"station":"VIN","arrived_at":"05:34","launched_at":"05:41","arrived_duration":1774,"launched_duration":1781,"distance":472,"number_of_days":1},{"station":"THO","arrived_at":"07:58","launched_at":"08:01","arrived_duration":1918,"launched_duration":1921,"distance":616,"number_of_days":1},{"station":"BSO","arrived_at":"08:38","launched_at":"08:50","arrived_duration":1958,"launched_duration":1970,"distance":650,"number_of_days":1},{"station":"NBI","arrived_at":"09:21","launched_at":"09:24","arrived_duration":2001,"launched_duration":2004,"distance":676,"number_of_days":1},{"station":"NDI","arrived_at":"10:02","launched_at":"10:05","arrived_duration":2042,"launched_duration":2045,"distance":704,"number_of_days":1},{"station":"PLY","arrived_at":"10:47","launched_at":"10:49","arrived_duration":2087,"launched_duration":2089,"distance":735,"number_of_days":1},{"station":"HNO","arrived_at":"11:55","launched_at":"11:55","arrived_duration":2155,"launched_duration":2155,"distance":791,"number_of_days":1}],"SE21":[{"station":"HUE","arrived_at":"07:00","launched_at":"07:00","arrived_duration":420,"launched_duration":420,"distance":0,"number_of_days":0},{"station":"LCO","arrived_at":"08:17","launched_at":"08:25","arrived_duration":497,"launched_duration":505,"distance":67,"number_of_days":0},{"station":"DNA","arrived_at":"09:40","launched_at":"09:55","arrived_duration":580,"launched_duration":595,"distance":103,"number_of_days":0},{"station":"TKI","arrived_at":"10:37","launched_at":"10:40","arrived_duration":637,"launched_duration":640,"distance":137,"number_of_days":0},{"station":"PCG","arrived_at":"10:56","launched_at":"10:59","arrived_duration":656,"launched_duration":659,"distance":154,"number_of_days":0},{"station":"TKY","arrived_at":"11:34","launched_at":"11:37","arrived_duration":694,"launched_duration":697,"distance":177,"number_of_days":0},{"station":"NTH","arrived_at":"12:22","launched_at":"12:24","arrived_duration":742,"launched_duration":744,"distance":202,"number_of_days":0},{"station":"QNG","arrived_at":"13:04","launched_at":"13:07","arrived_duration":784,"launched_duration":787,"distance":240,"number_of_days":0},{"station":"DPH","arrived_at":"13:50","launched_at":"13:52","arrived_duration":830,"launched_duration":832,"distance":280,"number_of_days":0},{"station":"BSN","arrived_at":"14:40","launched_at":"14:42","arrived_duration":880,"launched_duration":882,"distance":329,"number_of_days":0},{"station":"DTR","arrived_at":"16:00","launched_at":"16:15","arrived_duration":960,"launched_duration":975,"distance":408,"number_of_days":0},{"station":"LHA","arrived_at":"17:18","launched_at":"17:21","arrived_duration":1038,"launched_duration":1041,"distance":466,"number_of_days":0},{"station":"THA","arrived_at":"18:05","launched_at":"18:11","arrived_duration":1085,"launched_duration":1091,"distance":510,"number_of_days":0},{"station":"GIA","arrived_at":"19:23","launched_at":"19:26","arrived_duration":1163,"launched_duration":1166,"distance":566,"number_of_days":0},{"station":"NHO","arrived_at":"19:52","launched_at":"19:55","arrived_duration":1192,"launched_duration":1195,"distance":593,"number_of_days":0},{"station":"NTR","arrived_at":"20:36","launched_at":"20:43","arrived_duration":1236,"launched_duration":1243,"distance":627,"number_of_days":0},{"station":"NBA","arrived_at":"21:33","launched_at":"21:35","arrived_duration":1293,"launched_duration":1295,"distance":676,"number_of_days":0},{"station":"TCH","arrived_at":"22:17","launched_at":"22:20","arrived_duration":1337,"launched_duration":1340,"distance":720,"number_of_days":0},{"station":"MMA","arrived_at":"01:46","launched_at":"01:49","arrived_duration":1546,"launched_duration":1549,"distance":863,"number_of_days":1},{"station":"LKH","arrived_at":"03:32","launched_at":"03:35","arrived_duration":1652,"launched_duration":1655,"distance":961,"number_of_days":1},{"station":"BHO","arrived_at":"04:32","launched_at":"04:35","arrived_duration":1712,"launched_duration":1715,"distance":1009,"number_of_days":1},{"station":"DIA","arrived_at":"04:47","launched_at":"04:50","arrived_duration":1727,"launched_duration":1730,"distance":1019,"number_of_days":1},{"station":"SGO","arrived_at":"05:20","launched_at":"05:20","arrived_duration":1760,"launched_duration":1760,"distance":1038,"number_of_days":1}],"SE22":[{"station":"SGO","arrived_at":"11:50","launched_at":"11:50","arrived_duration":710,"launched_duration":710,"distance":0,"number_of_days":0},{"station":"DIA","arrived_at":"12:19","launched_at":"12:22","arrived_duration":739,"launched_duration":742,"distance":19,"number_of_days":0},{"station":"BHO","arrived_at":"12:34","launched_at":"12:37","arrived_duration":754,"launched_duration":757,"distance":29,"number_of_days":0},{"station":"LKH","arrived_at":"13:36","launched_at":"13:39","arrived_duration":816,"launched_duration":819,"distance":77,"number_of_days":0},{"station":"MMA","arrived_at":"15:50","launched_at":"15:55","arrived_duration":950,"launched_duration":955,"distance":175,"number_of_days":0},{"station":"SMA","arrived_at":"16:54","launched_at":"16:57","arrived_duration":1014,"launched_duration":1017,"distance":242,"number_of_days":0},{"station":"TCH","arrived_at":"18:11","launched_at":"18:14","arrived_duration":1091,"launched_duration":1094,"distance":318,"number_of_days":0},{"station":"NBA","arrived_at":"18:56","launched_at":"18:58","arrived_duration":1136,"launched_duration":1138,"distance":362,"number_of_days":0},{"station":"NTR","arrived_at":"19:57","launched_at":"20:04","arrived_duration":1197,"launched_duration":1204,"distance":411,"number_of_days":0},{"station":"NHO","arrived_at":"20:50","launched_at":"20:53","arrived_duration":1250,"launched_duration":1253,"distance":445,"number_of_days":0},{"station":"GIA","arrived_at":"21:19","launched_at":"21:27","arrived_duration":1279,"launched_duration":1287,"distance":472,"number_of_days":0},{"station":"THA","arrived_at":"22:24","launched_at":"22:27","arrived_duration":1344,"launched_duration":1347,"distance":528,"number_of_days":0},{"station":"LHA","arrived_at":"23:11","launched_at":"23:13","arrived_duration":1391,"launched_duration":1393,"distance":572,"number_of_days":0},{"station":"DTR","arrived_at":"00:07","launched_at":"00:22","arrived_duration":1447,"launched_duration":1462,"distance":630,"number_of_days":1},{"station":"BSN","arrived_at":"01:39","launched_at":"01:42","arrived_duration":1539,"launched_duration":1542,"distance":709,"number_of_days":1},{"station":"DPH","arrived_at":"02:36","launched_at":"02:39","arrived_duration":1596,"launched_duration":1599,"distance":758,"number_of_days":1},{"station":"QNG","arrived_at":"03:21","launched_at":"03:26","arrived_duration":1641,"launched_duration":1646,"distance":798,"number_of_days":1},{"station":"NTH","arrived_at":"04:14","launched_at":"04:17","arrived_duration":1694,"launched_duration":1697,"distance":836,"number_of_days":1},{"station":"TKY","arrived_at":"04:44","launched_at":"04:47","arrived_duration":1724,"launched_duration":1727,"distance":861,"number_of_days":1},{"station":"PCG","arrived_at":"05:10","launched_at":"05:13","arrived_duration":1750,"launched_duration":1753,"distance":884,"number_of_days":1},{"station":"TKI","arrived_at":"05:29","launched_at":"05:32","arrived_duration":1769,"launched_duration":1772,"distance":901,"number_of_days":1},{"station":"DNA","arrived_at":"06:15","launched_at":"06:30","arrived_duration":1815,"launched_duration":1830,"distance":935,"number_of_days":1},{"station":"LCO","arrived_at":"08:22","launched_at":"08:28","arrived_duration":1942,"launched_duration":1948,"distance":971,"number_of_days":1},{"station":"HUE","arrived_at":"10:10","launched_at":"10:10","arrived_duration":2050,"launched_duration":2050,"distance":1038,"number_of_days":1}],"SE3":[{"station":"HNO","arrived_at":"19:30","launched_at":"19:30","arrived_duration":1170,"launched_duration":1170,"distance":0,"number_of_days":0},{"station":"PLY","arrived_at":"20:34","launched_at":"20:37","arrived_duration":1234,"launched_duration":1237,"distance":56,"number_of_days":0},{"station":"NDI","arrived_at":"21:10","launched_at":"21:13","arrived_duration":1270,"launched_duration":1273,"distance":87,"number_of_days":0},{"station":"NBI","arrived_at":"21:44","launched_at":"21:47","arrived_duration":1304,"launched_duration":1307,"distance":115,"number_of_days":0},{"station":"THO","arrived_at":"22:52","launched_at":"22:55","arrived_duration":1372,"launched_duration":1375,"distance":175,"number_of_days":0},{"station":"VIN","arrived_at":"01:16","launched_at":"01:23","arrived_duration":1516,"launched_duration":1523,"distance":319,"number_of_days":1},{"station":"DLE","arrived_at":"03:40","launched_at":"03:43","arrived_duration":1660,"launched_duration":1663,"distance":436,"number_of_days":1},{"station":"DHO","arrived_at":"05:21","launched_at":"05:33","arrived_duration":1761,"launched_duration":1773,"distance":522,"number_of_days":1},{"station":"DHA","arrived_at":"07:15","launched_at":"07:18","arrived_duration":1875,"launched_duration":1878,"distance":622,"number_of_days":1},{"station":"HUE","arrived_at":"08:30","launched_at":"08:37","arrived_duration":1950,"launched_duration":1957,"distance":688,"number_of_days":1},{"station":"DNA","arrived_at":"11:05","launched_at":"11:25","arrived_duration":2105,"launched_duration":2125,"distance":791,"number_of_days":1},{"station":"TKY","arrived_at":"13:14","launched_at":"13:17","arrived_duration":2234,"launched_duration":2237,"distance":865,"number_of_days":1},{"station":"QNG","arrived_at":"14:22","launched_at":"14:27","arrived_duration":2302,"launched_duration":2307,"distance":928,"number_of_days":1},{"station":"BSN","arrived_at":"15:55","launched_at":"15:58","arrived_duration":2395,"launched_duration":2398,"distance":1017,"number_of_days":1},{"station":"DTR","arrived_at":"17:16","launched_at":"17:31","arrived_duration":2476,"launched_duration":2491,"distance":1096,"number_of_days":1},{"station":"THA","arrived_at":"19:09","launched_at":"19:12","arrived_duration":2589,"launched_duration":2592,"distance":1198,"number_of_days":1},{"station":"NTR","arrived_at":"21:05","launched_at":"21:12","arrived_duration":2705,"launched_duration":2712,"distance":1315,"number_of_days":1},{"station":"TCH","arrived_at":"22:43","launched_at":"22:46","arrived_duration":2803,"launched_duration":2806,"distance":1408,"number_of_days":1},{"station":"MMA","arrived_at":"01:08","launched_at":"01:13","arrived_duration":2948,"launched_duration":2953,"distance":1551,"number_of_days":2},{"station":"LKH","arrived_at":"02:58","launched_at":"03:00","arrived_duration":3058,"launched_duration":3060,"distance":1649,"number_of_days":2},{"station":"BHO","arrived_at":"03:57","launched_at":"04:00","arrived_duration":3117,"launched_duration":3120,"distance":1697,"number_of_days":2},{"station":"DIA","arrived_at":"04:12","launched_at":"04:15","arrived_duration":3132,"launched_duration":3135,"distance":1707,"number_of_days":2},{"station":"SGO","arrived_at":"04:45","launched_at":"04:45","arrived_duration":3165,"launched_duration":3165,"distance":1726,"number_of_days":2}],"SE35":[{"station":"HNO","arrived_at":"13:10","launched_at":"13:10","arrived_duration":790,"launched_duration":790,"distance":0,"number_of_days":0},{"station":"GBA","arrived_at":"13:23","launched_at":"13:25","arrived_duration":803,"launched_duration":805,"distance":4,"number_of_days":0},{"station":"NDI","arrived_at":"15:01","launched_at":"15:04","arrived_duration":901,"launched_duration":904,"distance":87,"number_of_days":0},{"station":"NBI","arrived_at":"15:35","launched_at":"15:38","arrived_duration":935,"launched_duration":938,"distance":115,"number_of_days":0},{"station":"THO","arrived_at":"17:15","launched_at":"17:18","arrived_duration":1035,"launched_duration":1038,"distance":175,"number_of_days":0},{"station":"CSY","arrived_at":"18:58","launched_at":"19:01","arrived_duration":1138,"launched_duration":1141,"distance":279,"number_of_days":0},{"station":"VIN","arrived_at":"19:40","launched_at":"19:40","arrived_duration":1180,"launched_duration":1180,"distance":319,"number_of_days":0}],"SE36":[{"station":"VIN","arrived_at":"13:30","launched_at":"13:30","arrived_duration":810,"launched_duration":810,"distance":0,"number_of_days":0},{"station":"CSY","arrived_at":"14:10","launched_at":"14:24","arrived_duration":850,"launched_duration":864,"distance":40,"number_of_days":0},{"station":"THO","arrived_at":"16:08","launched_at":"16:11","arrived_duration":968,"launched_duration":971,"distance":144,"number_of_days":0},{"station":"NBI","arrived_at":"17:35","launched_at":"17:38","arrived_duration":1055,"launched_duration":1058,"distance":204,"number_of_days":0},{"station":"NDI","arrived_at":"18:09","launched_at":"18:12","arrived_duration":1089,"launched_duration":1092,"distance":232,"number_of_days":0},{"station":"HNO","arrived_at":"19:58","launched_at":"19:58","arrived_duration":1198,"launched_duration":1198,"distance":319,"number_of_days":0}],"SE4":[{"station":"SGO","arrived_at":"19:45","launched_at":"19:45","arrived_duration":1185,"launched_duration":1185,"distance":0,"number_of_days":0},{"station":"DIA","arrived_at":"20:14","launched_at":"20:17","arrived_duration":1214,"launched_duration":1217,"distance":19,"number_of_days":0},{"station":"BHO","arrived_at":"20:29","launched_at":"20:32","arrived_duration":1229,"launched_duration":1232,"distance":29,"number_of_days":0},{"station":"LKH","arrived_at":"21:31","launched_at":"21:34","arrived_duration":1291,"launched_duration":1294,"distance":77,"number_of_days":0},{"station":"MMA","arrived_at":"23:15","launched_at":"23:20","arrived_duration":1395,"launched_duration":1400,"distance":175,"number_of_days":0},{"station":"NTR","arrived_at":"03:14","launched_at":"03:21","arrived_duration":1634,"launched_duration":1641,"distance":411,"number_of_days":1},{"station":"THA","arrived_at":"05:18","launched_at":"05:21","arrived_duration":1758,"launched_duration":1761,"distance":528,"number_of_days":1},{"station":"DTR","arrived_at":"06:57","launched_at":"07:09","arrived_duration":1857,"launched_duration":1869,"distance":630,"number_of_days":1},{"station":"BSN","arrived_at":"08:28","launched_at":"08:31","arrived_duration":1948,"launched_duration":1951,"distance":709,"number_of_days":1},{"station":"QNG","arrived_at":"09:59","launched_at":"10:04","arrived_duration":2039,"launched_duration":2044,"distance":798,"number_of_days":1},{"station":"TKY","arrived_at":"11:08","launched_at":"11:11","arrived_duration":2108,"launched_duration":2111,"distance":861,"number_of_days":1},{"station":"DNA","arrived_at":"12:29","launched_at":"12:49","arrived_duration":2189,"launched_duration":2209,"distance":935,"number_of_days":1},{"station":"HUE","arrived_at":"15:26","launched_at":"15:31","arrived_duration":2366,"launched_duration":2371,"distance":1038,"number_of_days":1},{"station":"DHA","arrived_at":"16:43","launched_at":"16:46","arrived_duration":2443,"launched_duration":2446,"distance":1104,"number_of_days":1},{"station":"DHO","arrived_at":"18:28","launched_at":"18:40","arrived_duration":2548,"launched_duration":2560,"distance":1204,"number_of_days":1},{"station":"DLE","arrived_at":"20:15","launched_at":"20:18","arrived_duration":2655,"launched_duration":2658,"distance":1290,"number_of_days":1},{"station":"HPO","arrived_at":"21:20","launched_at":"21:22","arrived_duration":2720,"launched_duration":2722,"distance":1339,"number_of_days":1},{"station":"YTR","arrived_at":"22:16","launched_at":"22:19","arrived_duration":2776,"launched_duration":2779,"distance":1386,"number_of_days":1},{"station":"VIN","arrived_at":"22:42","launched_at":"22:47","arrived_duration":2802,"launched_duration":2807,"distance":1407,"number_of_days":1},{"station":"THO","arrived_at":"01:17","launched_at":"01:28","arrived_duration":2957,"launched_duration":2968,"distance":1551,"number_of_days":2},{"station":"NDI","arrived_at":"03:04","launched_at":"03:07","arrived_duration":3064,"launched_duration":3067,"distance":1639,"number_of_days":2},{"station":"PLY","arrived_at":"03:41","launched_at":"03:44","arrived_duration":3101,"launched_duration":3104,"distance":1670,"number_of_days":2},{"station":"HNO","arrived_at":"04:50","launched_at":"04:50","arrived_duration":3170,"launched_duration":3170,"distance":1726,"number_of_days":2}],"SE5":[{"station":"HNO","arrived_at":"09:00","launched_at":"09:00","arrived_duration":540,"launched_duration":540,"distance":0,"number_of_days":0},{"station":"PLY","arrived_at":"10:04","launched_at":"10:07","arrived_duration":604,"launched_duration":607,"distance":56,"number_of_days":0},{"station":"NDI","arrived_at":"10:42","launched_at":"10:45","arrived_duration":642,"launched_duration":645,"distance":87,"number_of_days":0},{"station":"NBI","arrived_at":"11:17","launched_at":"11:20","arrived_duration":677,"launched_duration":680,"distance":115,"number_of_days":0},{"station":"BSO","arrived_at":"11:52","launched_at":"11:55","arrived_duration":712,"launched_duration":715,"distance":141,"number_of_days":0},{"station":"THO","arrived_at":"12:31","launched_at":"12:36","arrived_duration":751,"launched_duration":756,"distance":175,"number_of_days":0},{"station":"MKH","arrived_at":"12:58","launched_at":"13:01","arrived_duration":778,"launched_duration":781,"distance":197,"number_of_days":0},{"station":"CSY","arrived_at":"14:18","launched_at":"14:21","arrived_duration":858,"launched_duration":861,"distance":279,"number_of_days":0},{"station":"VIN","arrived_at":"15:00","launched_at":"15:07","arrived_duration":900,"launched_duration":907,"distance":319,"number_of_days":0},{"station":"YTR","arrived_at":"15:30","launched_at":"15:33","arrived_duration":930,"launched_duration":933,"distance":340,"number_of_days":0},{"station":"HPO","arrived_at":"16:27","launched_at":"16:30","arrived_duration":987,"launched_duration":990,"distance":387,"number_of_days":0},{"station":"DLE","arrived_at":"17:31","launched_at":"17:34","arrived_duration":1051,"launched_duration":1054,"distance":436,"number_of_days":0},{"station":"DHO","arrived_at":"19:15","launched_at":"19:30","arrived_duration":1155,"launched_duration":1170,"distance":522,"number_of_days":0},{"station":"DHA","arrived_at":"21:08","launched_at":"21:11","arrived_duration":1268,"launched_duration":1271,"distance":622,"number_of_days":0},{"station":"HUE","arrived_at":"22:21","launched_at":"22:28","arrived_duration":1341,"launched_duration":1348,"distance":688,"number_of_days":0},{"station":"DNA","arrived_at":"01:06","launched_at":"01:21","arrived_duration":1506,"launched_duration":1521,"distance":791,"number_of_days":1},{"station":"QNG","arrived_at":"03:51","launched_at":"03:56","arrived_duration":1671,"launched_duration":1676,"distance":928,"number_of_days":1},{"station":"DTR","arrived_at":"06:42","launched_at":"07:00","arrived_duration":1842,"launched_duration":1860,"distance":1096,"number_of_days":1},{"station":"THA","arrived_at":"08:47","launched_at":"08:50","arrived_duration":1967,"launched_duration":1970,"distance":1198,"number_of_days":1},{"station":"NTR","arrived_at":"10:44","launched_at":"10:51","arrived_duration":2084,"launched_duration":2091,"distance":1315,"number_of_days":1},{"station":"TCH","arrived_at":"12:40","launched_at":"12:43","arrived_duration":2200,"launched_duration":2203,"distance":1408,"number_of_days":1},{"station":"MMA","arrived_at":"15:07","launched_at":"15:12","arrived_duration":2347,"launched_duration":2352,"distance":1551,"number_of_days":1},{"station":"LKH","arrived_at":"16:54","launched_at":"16:57","arrived_duration":2454,"launched_duration":2457,"distance":1649,"number_of_days":1},{"station":"BHO","arrived_at":"17:54","launched_at":"17:57","arrived_duration":2514,"launched_duration":2517,"distance":1697,"number_of_days":1},{"station":"SGO","arrived_at":"18:38","launched_at":"18:38","arrived_duration":2558,"launched_duration":2558,"distance":1726,"number_of_days":1}],"SE6":[{"station":"SGO","arrived_at":"09:00","launched_at":"09:00","arrived_duration":540,"launched_duration":540,"distance":0,"number_of_days":0},{"station":"BHO","arrived_at":"09:39","launched_at":"09:42","arrived_duration":579,"launched_duration":582,"distance":29,"number_of_days":0},{"station":"LKH","arrived_at":"10:41","launched_at":"10:44","arrived_duration":641,"launched_duration":644,"distance":77,"number_of_days":0},{"station":"MMA","arrived_at":"12:25","launched_at":"12:30","arrived_duration":745,"launched_duration":750,"distance":175,"number_of_days":0},{"station":"TCH","arrived_at":"14:42","launched_at":"14:45","arrived_duration":882,"launched_duration":885,"distance":318,"number_of_days":0},{"station":"NTR","arrived_at":"16:16","launched_at":"16:23","arrived_duration":976,"launched_duration":983,"distance":411,"number_of_days":0},{"station":"THA","arrived_at":"18:34","launched_at":"18:37","arrived_duration":1114,"launched_duration":1117,"distance":528,"number_of_days":0},{"station":"DTR","arrived_at":"20:43","launched_at":"20:58","arrived_duration":1243,"launched_duration":1258,"distance":630,"number_of_days":0},{"station":"QNG","arrived_at":"23:42","launched_at":"23:47","arrived_duration":1422,"launched_duration":1427,"distance":798,"number_of_days":0},{"station":"DNA","arrived_at":"02:08","launched_at":"02:23","arrived_duration":1568,"launched_duration":1583,"distance":935,"number_of_days":1},{"station":"HUE","arrived_at":"04:52","launched_at":"05:00","arrived_duration":1732,"launched_duration":1740,"distance":1038,"number_of_days":1},{"station":"DHA","arrived_at":"06:14","launched_at":"06:17","arrived_duration":1814,"launched_duration":1817,"distance":1104,"number_of_days":1},{"station":"DHO","arrived_at":"08:27","launched_at":"08:42","arrived_duration":1947,"launched_duration":1962,"distance":1204,"number_of_days":1},{"station":"DLE","arrived_at":"10:16","launched_at":"10:18","arrived_duration":2056,"launched_duration":2058,"distance":1290,"number_of_days":1},{"station":"HPO","arrived_at":"11:20","launched_at":"11:22","arrived_duration":2120,"launched_duration":2122,"distance":1339,"number_of_days":1},{"station":"YTR","arrived_at":"12:16","launched_at":"12:19","arrived_duration":2176,"launched_duration":2179,"distance":1386,"number_of_days":1},{"station":"VIN","arrived_at":"12:44","launched_at":"12:51","arrived_duration":2204,"launched_duration":2211,"distance":1407,"number_of_days":1},{"station":"CSY","arrived_at":"13:32","launched_at":"13:35","arrived_duration":2252,"launched_duration":2255,"distance":1447,"number_of_days":1},{"station":"MKH","arrived_at":"15:04","launched_at":"15:07","arrived_duration":2344,"launched_duration":2347,"distance":1529,"number_of_days":1},{"station":"THO","arrived_at":"15:30","launched_at":"15:35","arrived_duration":2370,"launched_duration":2375,"distance":1551,"number_of_days":1},{"station":"BSO","arrived_at":"16:13","launched_at":"16:16","arrived_duration":2413,"launched_duration":2416,"distance":1585,"number_of_days":1},{"station":"NBI","arrived_at":"16:48","launched_at":"16:51","arrived_duration":2448,"launched_duration":2451,"distance":1611,"number_of_days":1},{"station":"NDI","arrived_at":"17:22","launched_at":"17:27","arrived_duration":2482,"launched_duration":2487,"distance":1639,"number_of_days":1},{"station":"PLY","arrived_at":"18:01","launched_at":"18:04","arrived_duration":2521,"launched_duration":2524,"distance":1670,"number_of_days":1},{"station":"HNO","arrived_at":"19:12","launched_at":"19:12","arrived_duration":2592,"launched_duration":2592,"distance":1726,"number_of_days":1}],"SE7":[{"station":"HNO","arrived_at":"06:00","launched_at":"06:00","arrived_duration":360,"launched_duration":360,"distance":0,"number_of_days":0},{"station":"PLY","arrived_at":"07:03","launched_at":"07:06","arrived_duration":423,"launched_duration":426,"distance":56,"number_of_days":0},{"station":"NDI","arrived_at":"07:39","launched_at":"07:42","arrived_duration":459,"launched_duration":462,"distance":87,"number_of_days":0},{"station":"NBI","arrived_at":"08:14","launched_at":"08:17","arrived_duration":494,"launched_duration":497,"distance":115,"number_of_days":0},{"station":"THO","arrived_at":"09:25","launched_at":"09:28","arrived_duration":565,"launched_duration":568,"distance":175,"number_of_days":0},{"station":"MKH","arrived_at":"09:50","launched_at":"09:53","arrived_duration":590,"launched_duration":593,"distance":197,"number_of_days":0},{"station":"CSY","arrived_at":"11:19","launched_at":"11:22","arrived_duration":679,"launched_duration":682,"distance":279,"number_of_days":0},{"station":"VIN","arrived_at":"12:02","launched_at":"12:09","arrived_duration":722,"launched_duration":729,"distance":319,"number_of_days":0},{"station":"YTR","arrived_at":"12:43","launched_at":"12:46","arrived_duration":763,"launched_duration":766,"distance":340,"number_of_days":0},{"station":"HPO","arrived_at":"13:40","launched_at":"13:42","arrived_duration":820,"launched_duration":822,"distance":387,"number_of_days":0},{"station":"DLE","arrived_at":"14:43","launched_at":"14:45","arrived_duration":883,"launched_duration":885,"distance":436,"number_of_days":0},{"station":"MLE","arrived_at":"15:35","launched_at":"15:37","arrived_duration":935,"launched_duration":937,"distance":482,"number_of_days":0},{"station":"DHO","arrived_at":"16:22","launched_at":"16:34","arrived_duration":982,"launched_duration":994,"distance":522,"number_of_days":0},{"station":"MDU","arrived_at":"17:06","launched_at":"17:09","arrived_duration":1026,"launched_duration":1029,"distance":551,"number_of_days":0},{"station":"DHA","arrived_at":"18:32","launched_at":"18:35","arrived_duration":1112,"launched_duration":1115,"distance":622,"number_of_days":0},{"station":"HUE","arrived_at":"19:46","launched_at":"19:51","arrived_duration":1186,"launched_duration":1191,"distance":688,"number_of_days":0},{"station":"DNA","arrived_at":"22:21","launched_at":"22:36","arrived_duration":1341,"launched_duration":1356,"distance":791,"number_of_days":0},{"station":"TKY","arrived_at":"00:01","launched_at":"00:04","arrived_duration":1441,"launched_duration":1444,"distance":865,"number_of_days":1},{"station":"QNG","arrived_at":"01:29","launched_at":"01:32","arrived_duration":1529,"launched_duration":1532,"distance":928,"number_of_days":1},{"station":"DTR","arrived_at":"04:17","launched_at":"04:32","arrived_duration":1697,"launched_duration":1712,"distance":1096,"number_of_days":1},{"station":"THA","arrived_at":"06:15","launched_at":"06:18","arrived_duration":1815,"launched_duration":1818,"distance":1198,"number_of_days":1},{"station":"NHO","arrived_at":"07:48","launched_at":"07:51","arrived_duration":1908,"launched_duration":1911,"distance":1281,"number_of_days":1},{"station":"NTR","arrived_at":"08:24","launched_at":"08:39","arrived_duration":1944,"launched_duration":1959,"distance":1315,"number_of_days":1},{"station":"TCH","arrived_at":"10:10","launched_at":"10:13","arrived_duration":2050,"launched_duration":2053,"distance":1408,"number_of_days":1},{"station":"MMA","arrived_at":"12:28","launched_at":"12:33","arrived_duration":2188,"launched_duration":2193,"distance":1551,"number_of_days":1},{"station":"SKI","arrived_at":"13:32","launched_at":"13:34","arrived_duration":2252,"launched_duration":2254,"distance":1603,"number_of_days":1},{"station":"LKH","arrived_at":"14:19","launched_at":"14:22","arrived_duration":2299,"launched_duration":2302,"distance":1649,"number_of_days":1},{"station":"BHO","arrived_at":"15:19","launched_at":"15:25","arrived_duration":2359,"launched_duration":2365,"distance":1697,"number_of_days":1},{"station":"DIA","arrived_at":"15:37","launched_at":"15:40","arrived_duration":2377,"launched_duration":2380,"distance":1707,"number_of_days":1},{"station":"SGO","arrived_at":"16:10","launched_at":"16:10","arrived_duration":2410,"launched_duration":2410,"distance":1726,"number_of_days":1}],"SE8":[{"station":"SGO","arrived_at":"06:00","launched_at":"06:00","arrived_duration":360,"launched_duration":360,"distance":0,"number_of_days":0},{"station":"DIA","arrived_at":"06:28","launched_at":"06:30","arrived_duration":388,"launched_duration":390,"distance":19,"number_of_days":0},{"station":"BHO","arrived_at":"06:41","launched_at":"06:44","arrived_duration":401,"launched_duration":404,"distance":29,"number_of_days":0},{"station":"LKH","arrived_at":"07:43","launched_at":"07:45","arrived_duration":463,"launched_duration":465,"distance":77,"number_of_days":0},{"station":"SKI","arrived_at":"08:29","launched_at":"08:31","arrived_duration":509,"launched_duration":511,"distance":123,"number_of_days":0},{"station":"MMA","arrived_at":"09:28","launched_at":"09:31","arrived_duration":568,"launched_duration":571,"distance":175,"number_of_days":0},{"station":"TCH","arrived_at":"11:45","launched_at":"11:48","arrived_duration":705,"launched_duration":708,"distance":318,"number_of_days":0},{"station":"NTR","arrived_at":"13:18","launched_at":"13:33","arrived_duration":798,"launched_duration":813,"distance":411,"number_of_days":0},{"station":"NHO","arrived_at":"14:11","launched_at":"14:14","arrived_duration":851,"launched_duration":854,"distance":445,"number_of_days":0},{"station":"THA","arrived_at":"15:34","launched_at":"15:37","arrived_duration":934,"launched_duration":937,"distance":528,"number_of_days":0},{"station":"DTR","arrived_at":"17:12","launched_at":"17:27","arrived_duration":1032,"launched_duration":1047,"distance":630,"number_of_days":0},{"station":"BSN","arrived_at":"18:51","launched_at":"18:54","arrived_duration":1131,"launched_duration":1134,"distance":709,"number_of_days":0},{"station":"QNG","arrived_at":"20:21","launched_at":"20:24","arrived_duration":1221,"launched_duration":1224,"distance":798,"number_of_days":0},{"station":"TKY","arrived_at":"21:28","launched_at":"21:31","arrived_duration":1288,"launched_duration":1291,"distance":861,"number_of_days":0},{"station":"DNA","arrived_at":"22:49","launched_at":"23:04","arrived_duration":1369,"launched_duration":1384,"distance":935,"number_of_days":0},{"station":"HUE","arrived_at":"01:34","launched_at":"01:39","arrived_duration":1534,"launched_duration":1539,"distance":1038,"number_of_days":1},{"station":"DHA","arrived_at":"02:53","launched_at":"02:56","arrived_duration":1613,"launched_duration":1616,"distance":1104,"number_of_days":1},{"station":"MDU","arrived_at":"04:07","launched_at":"04:10","arrived_duration":1687,"launched_duration":1690,"distance":1175,"number_of_days":1},{"station":"DHO","arrived_at":"04:43","launched_at":"04:55","arrived_duration":1723,"launched_duration":1735,"distance":1204,"number_of_days":1},{"station":"MLE","arrived_at":"05:51","launched_at":"05:54","arrived_duration":1791,"launched_duration":1794,"distance":1244,"number_of_days":1},{"station":"DLE","arrived_at":"06:52","launched_at":"06:55","arrived_duration":1852,"launched_duration":1855,"distance":1290,"number_of_days":1},{"station":"HPO","arrived_at":"07:57","launched_at":"08:00","arrived_duration":1917,"launched_duration":1920,"distance":1339,"number_of_days":1},{"station":"YTR","arrived_at":"08:54","launched_at":"08:57","arrived_duration":1974,"launched_duration":1977,"distance":1386,"number_of_days":1},{"station":"VIN","arrived_at":"09:21","launched_at":"09:28","arrived_duration":2001,"launched_duration":2008,"distance":1407,"number_of_days":1},{"station":"CSY","arrived_at":"10:09","launched_at":"10:11","arrived_duration":2049,"launched_duration":2051,"distance":1447,"number_of_days":1},{"station":"MKH","arrived_at":"11:29","launched_at":"11:31","arrived_duration":2129,"launched_duration":2131,"distance":1529,"number_of_days":1},{"station":"THO","arrived_at":"11:53","launched_at":"11:56","arrived_duration":2153,"launched_duration":2156,"distance":1551,"number_of_days":1},{"station":"NBI","arrived_at":"13:09","launched_at":"13:12","arrived_duration":2229,"launched_duration":2232,"distance":1611,"number_of_days":1},{"station":"NDI","arrived_at":"13:44","launched_at":"13:47","arrived_duration":2264,"launched_duration":2267,"distance":1639,"number_of_days":1},{"station":"PLY","arrived_at":"14:21","launched_at":"14:24","arrived_duration":2301,"launched_duration":2304,"distance":1670,"number_of_days":1},{"station":"HNO","arrived_at":"15:30","launched_at":"15:30","arrived_duration":2370,"launched_duration":2370,"distance":1726,"number_of_days":1}],"SE9":[{"station":"HNO","arrived_at":"14:30","launched_at":"14:30","arrived_duration":870,"launched_duration":870,"distance":0,"number_of_days":0},{"station":"GBA","arrived_at":"14:42","launched_at":"14:45","arrived_duration":882,"launched_duration":885,"distance":4,"number_of_days":0},{"station":"PLY","arrived_at":"15:46","launched_at":"15:49","arrived_duration":946,"launched_duration":949,"distance":56,"number_of_days":0},{"station":"NDI","arrived_at":"16:24","launched_at":"16:27","arrived_duration":984,"launched_duration":987,"distance":87,"number_of_days":0},{"station":"NBI","arrived_at":"17:13","launched_at":"17:16","arrived_duration":1033,"launched_duration":1036,"distance":115,"number_of_days":0},{"station":"BSO","arrived_at":"17:48","launched_at":"17:51","arrived_duration":1068,"launched_duration":1071,"distance":141,"number_of_days":0},{"station":"THO","arrived_at":"18:27","launched_at":"18:30","arrived_duration":1107,"launched_duration":1110,"distance":175,"number_of_days":0},{"station":"MKH","arrived_at":"18:52","launched_at":"18:55","arrived_duration":1132,"launched_duration":1135,"distance":197,"number_of_days":0},{"station":"CSY","arrived_at":"20:12","launched_at":"20:15","arrived_duration":1212,"launched_duration":1215,"distance":279,"number_of_days":0},{"station":"VIN","arrived_at":"20:55","launched_at":"21:02","arrived_duration":1255,"launched_duration":1262,"distance":319,"number_of_days":0},{"station":"YTR","arrived_at":"21:26","launched_at":"21:29","arrived_duration":1286,"launched_duration":1289,"distance":340,"number_of_days":0},{"station":"HPO","arrived_at":"22:38","launched_at":"22:41","arrived_duration":1358,"launched_duration":1361,"distance":387,"number_of_days":0},{"station":"DLE","arrived_at":"23:43","launched_at":"23:46","arrived_duration":1423,"launched_duration":1426,"distance":436,"number_of_days":0},{"station":"DHO","arrived_at":"01:21","launched_at":"01:36","arrived_duration":1521,"launched_duration":1536,"distance":522,"number_of_days":1},{"station":"DHA","arrived_at":"03:25","launched_at":"03:28","arrived_duration":1645,"launched_duration":1648,"distance":622,"number_of_days":1},{"station":"HUE","arrived_at":"04:39","launched_at":"04:55","arrived_duration":1719,"launched_duration":1735,"distance":688,"number_of_days":1},{"station":"DNA","arrived_at":"07:35","launched_at":"07:50","arrived_duration":1895,"launched_duration":1910,"distance":791,"number_of_days":1},{"station":"TKY","arrived_at":"09:08","launched_at":"09:11","arrived_duration":1988,"launched_duration":1991,"distance":865,"number_of_days":1},{"station":"NTH","arrived_at":"09:38","launched_at":"09:41","arrived_duration":2018,"launched_duration":2021,"distance":890,"number_of_days":1},{"station":"QNG","arrived_at":"10:30","launched_at":"10:35","arrived_duration":2070,"launched_duration":2075,"distance":928,"number_of_days":1},{"station":"DPH","arrived_at":"11:34","launched_at":"11:36","arrived_duration":2134,"launched_duration":2136,"distance":968,"number_of_days":1},{"station":"BSN","arrived_at":"12:24","launched_at":"12:26","arrived_duration":2184,"launched_duration":2186,"distance":1017,"number_of_days":1},{"station":"DTR","arrived_at":"13:44","launched_at":"13:56","arrived_duration":2264,"launched_duration":2276,"distance":1096,"number_of_days":1},{"station":"THA","arrived_at":"15:31","launched_at":"15:40","arrived_duration":2371,"launched_duration":2380,"distance":1198,"number_of_days":1},{"station":"GIA","arrived_at":"16:39","launched_at":"16:54","arrived_duration":2439,"launched_duration":2454,"distance":1254,"number_of_days":1},{"station":"NHO","arrived_at":"17:27","launched_at":"17:30","arrived_duration":2487,"launched_duration":2490,"distance":1281,"number_of_days":1},{"station":"NTR","arrived_at":"18:04","launched_at":"18:19","arrived_duration":2524,"launched_duration":2539,"distance":1315,"number_of_days":1},{"station":"TCH","arrived_at":"20:07","launched_at":"20:10","arrived_duration":2647,"launched_duration":2650,"distance":1408,"number_of_days":1},{"station":"SMA","arrived_at":"21:24","launched_at":"21:26","arrived_duration":2724,"launched_duration":2726,"distance":1484,"number_of_days":1},{"station":"MMA","arrived_at":"22:26","launched_at":"22:32","arrived_duration":2786,"launched_duration":2792,"distance":1551,"number_of_days":1},{"station":"BHO","arrived_at":"01:55","launched_at":"02:00","arrived_duration":2995,"launched_duration":3000,"distance":1697,"number_of_days":2},{"station":"DIA","arrived_at":"02:12","launched_at":"02:15","arrived_duration":3012,"launched_duration":3015,"distance":1707,"number_of_days":2},{"station":"SGO","arrived_at":"02:47","launched_at":"02:47","arrived_duration":3047,"launched_duration":3047,"distance":1726,"number_of_days":2}],"SNT1":[{"station":"NTR","arrived_at":"19:20","launched_at":"19:20","arrived_duration":1160,"launched_duration":1160,"distance":0,"number_of_days":0},{"station":"TCH","arrived_at":"20:51","launched_at":"20:54","arrived_duration":1251,"launched_duration":1254,"distance":93,"number_of_days":0},{"station":"BHO","arrived_at":"02:42","launched_at":"02:47","arrived_duration":1602,"launched_duration":1607,"distance":382,"number_of_days":1},{"station":"DIA","arrived_at":"02:59","launched_at":"03:02","arrived_duration":1619,"launched_duration":1622,"distance":392,"number_of_days":1},{"station":"SGO","arrived_at":"03:35","launched_at":"03:35","arrived_duration":1655,"launched_duration":1655,"distance":411,"number_of_days":1}],"SNT2":[{"station":"SGO","arrived_at":"20:30","launched_at":"20:30","arrived_duration":1230,"launched_duration":1230,"distance":0,"number_of_days":0},{"station":"DIA","arrived_at":"20:59","launched_at":"21:02","arrived_duration":1259,"launched_duration":1262,"distance":19,"number_of_days":0},{"station":"BHO","arrived_at":"21:14","launched_at":"21:17","arrived_duration":1274,"launched_duration":1277,"distance":29,"number_of_days":0},{"station":"TCH","arrived_at":"04:00","launched_at":"04:03","arrived_duration":1680,"launched_duration":1683,"distance":318,"number_of_days":1},{"station":"NTR","arrived_at":"05:35","launched_at":"05:35","arrived_duration":1775,"launched_duration":1775,"distance":411,"number_of_days":1}],"SP1":[{"station":"HNO","arrived_at":"21:35","launched_at":"21:35","arrived_duration":1295,"launched_duration":1295,"distance":0,"number_of_days":0},{"station":"GLA","arrived_at":"21:50","launched_at":"21:53","arrived_duration":1310,"launched_duration":1313,"distance":5,"number_of_days":0},{"station":"YVI","arrived_at":"22:04","launched_at":"22:06","arrived_duration":1324,"launched_duration":1326,"distance":11,"number_of_days":0},{"station":"DAN","arrived_at":"22:26","launched_at":"22:28","arrived_duration":1346,"launched_duration":1348,"distance":21,"number_of_days":0},{"station":"VYE","arrived_at":"23:05","launched_at":"23:07","arrived_duration":1385,"launched_duration":1387,"distance":54,"number_of_days":0},{"station":"YBA","arrived_at":"01:25","launched_at":"01:40","arrived_duration":1525,"launched_duration":1540,"distance":155,"number_of_days":1},{"station":"THU","arrived_at":"02:45","launched_at":"02:48","arrived_duration":1605,"launched_duration":1608,"distance":202,"number_of_days":1},{"station":"LKA","arrived_at":"03:15","launched_at":"03:17","arrived_duration":1635,"launched_duration":1637,"distance":219,"number_of_days":1},{"station":"BHA","arrived_at":"03:46","launched_at":"03:49","arrived_duration":1666,"launched_duration":1669,"distance":237,"number_of_days":1},{"station":"PLU","arrived_at":"04:28","launched_at":"04:31","arrived_duration":1708,"launched_duration":1711,"distance":262,"number_of_days":1},{"station":"LCA","arrived_at":"05:30","launched_at":"05:30","arrived_duration":1770,"launched_duration":1770,"distance":294,"number_of_days":1}],"SP2":[{"station":"LCA","arrived_at":"20:55","launched_at":"20:55","arrived_duration":1255,"launched_duration":1255,"distance":0,"number_of_days":0},{"station":"PLU","arrived_at":"21:48","launched_at":"21:51","arrived_duration":1308,"launched_duration":1311,"distance":32,"number_of_days":0},{"station":"BHA","arrived_at":"22:28","launched_at":"22:31","arrived_duration":1348,"launched_duration":1351,"distance":57,"number_of_days":0},{"station":"MAA","arrived_at":"23:45","launched_at":"23:47","arrived_duration":1425,"launched_duration":1427,"distance":108,"number_of_days":0},{"station":"YBA","arrived_at":"00:31","launched_at":"00:38","arrived_duration":1471,"launched_duration":1478,"distance":139,"number_of_days":1},{"station":"DAN","arrived_at":"03:44","launched_at":"03:46","arrived_duration":1664,"launched_duration":1666,"distance":273,"number_of_days":1},{"station":"GLA","arrived_at":"04:14","launched_at":"04:17","arrived_duration":1694,"launched_duration":1697,"distance":289,"number_of_days":1},{"station":"HNO","arrived_at":"04:32","launched_at":"04:32","arrived_duration":1712,"launched_duration":1712,"distance":294,"number_of_days":1}],"SP3":[{"station":"HNO","arrived_at":"22:00","launched_at":"22:00","arrived_duration":1320,"launched_duration":1320,"distance":0,"number_of_days":0},{"station":"GLA","arrived_at":"22:15","launched_at":"22:18","arrived_duration":1335,"launched_duration":1338,"distance":5,"number_of_days":0},{"station":"YVI","arrived_at":"22:29","launched_at":"22:31","arrived_duration":1349,"launched_duration":1351,"distance":11,"number_of_days":0},{"station":"DAN","arrived_at":"22:51","launched_at":"22:53","arrived_duration":1371,"launched_duration":1373,"distance":21,"number_of_days":0},{"station":"VTR","arrived_at":"23:50","launched_at":"23:52","arrived_duration":1430,"launched_duration":1432,"distance":73,"number_of_days":0},{"station":"PTO","arrived_at":"00:30","launched_at":"00:32","arrived_duration":1470,"launched_duration":1472,"distance":99,"number_of_days":1},{"station":"YBA","arrived_at":"02:13","launched_at":"02:20","arrived_duration":1573,"launched_duration":1580,"distance":155,"number_of_days":1},{"station":"MAA","arrived_at":"03:03","launched_at":"03:06","arrived_duration":1623,"launched_duration":1626,"distance":186,"number_of_days":1},{"station":"BHA","arrived_at":"04:21","launched_at":"04:24","arrived_duration":1701,"launched_duration":1704,"distance":237,"number_of_days":1},{"station":"PLU","arrived_at":"05:03","launched_at":"05:06","arrived_duration":1743,"launched_duration":1746,"distance":262,"number_of_days":1},{"station":"LCA","arrived_at":"06:05","launched_at":"06:05","arrived_duration":1805,"launched_duration":1805,"distance":294,"number_of_days":1}],"SP4":[{"station":"LCA","arrived_at":"21:40","launched_at":"21:40","arrived_duration":1300,"launched_duration":1300,"distance":0,"number_of_days":0},{"station":"PLU","arrived_at":"22:33","launched_at":"22:36","arrived_duration":1353,"launched_duration":1356,"distance":32,"number_of_days":0},{"station":"BHA","arrived_at":"23:13","launched_at":"23:15","arrived_duration":1393,"launched_duration":1395,"distance":57,"number_of_days":0},{"station":"LKA","arrived_at":"23:43","launched_at":"23:45","arrived_duration":1423,"launched_duration":1425,"distance":75,"number_of_days":0},{"station":"THU","arrived_at":"00:11","launched_at":"00:13","arrived_duration":1451,"launched_duration":1453,"distance":92,"number_of_days":1},{"station":"YBA","arrived_at":"01:20","launched_at":"01:28","arrived_duration":1520,"launched_duration":1528,"distance":139,"number_of_days":1},{"station":"PTO","arrived_at":"02:50","launched_at":"02:52","arrived_duration":1610,"launched_duration":1612,"distance":195,"number_of_days":1},{"station":"VTR","arrived_at":"03:31","launched_at":"03:33","arrived_duration":1651,"launched_duration":1653,"distance":221,"number_of_days":1},{"station":"VYE","arrived_at":"03:57","launched_at":"03:59","arrived_duration":1677,"launched_duration":1679,"distance":240,"number_of_days":1},{"station":"YVI","arrived_at":"04:58","launched_at":"05:00","arrived_duration":1738,"launched_duration":1740,"distance":283,"number_of_days":1},{"station":"GLA","arrived_at":"05:12","launched_at":"05:15","arrived_duration":1752,"launched_duration":1755,"distance":289,"number_of_days":1},{"station":"HNO","arrived_at":"05:30","launched_at":"05:30","arrived_duration":1770,"launched_duration":1770,"distance":294,"number_of_days":1}],"SPT1":[{"station":"PTH","arrived_at":"13:05","launched_at":"13:05","arrived_duration":785,"launched_duration":785,"distance":0,"number_of_days":0},{"station":"MMA","arrived_at":"13:16","launched_at":"13:19","arrived_duration":796,"launched_duration":799,"distance":10,"number_of_days":0},{"station":"BHO","arrived_at":"16:15","launched_at":"16:18","arrived_duration":975,"launched_duration":978,"distance":156,"number_of_days":0},{"station":"STH","arrived_at":"16:35","launched_at":"16:38","arrived_duration":995,"launched_duration":998,"distance":170,"number_of_days":0},{"station":"SGO","arrived_at":"17:03","launched_at":"17:03","arrived_duration":1023,"launched_duration":1023,"distance":185,"number_of_days":0}],"SPT2":[{"station":"SGO","arrived_at":"06:40","launched_at":"06:40","arrived_duration":400,"launched_duration":400,"distance":0,"number_of_days":0},{"station":"STH","arrived_at":"07:04","launched_at":"07:12","arrived_duration":424,"launched_duration":432,"distance":15,"number_of_days":0},{"station":"BHO","arrived_at":"07:31","launched_at":"07:34","arrived_duration":451,"launched_duration":454,"distance":29,"number_of_days":0},{"station":"MMA","arrived_at":"10:14","launched_at":"10:17","arrived_duration":614,"launched_duration":617,"distance":175,"number_of_days":0},{"station":"PTH","arrived_at":"10:28","launched_at":"10:28","arrived_duration":628,"launched_duration":628,"distance":185,"number_of_days":0}],"SQN1":[{"station":"QNH","arrived_at":"14:35","launched_at":"14:35","arrived_duration":875,"launched_duration":875,"distance":0,"number_of_days":0},{"station":"DTR","arrived_at":"15:00","launched_at":"15:15","arrived_duration":900,"launched_duration":915,"distance":10,"number_of_days":0},{"station":"THA","arrived_at":"17:05","launched_at":"17:08","arrived_duration":1025,"launched_duration":1028,"distance":112,"number_of_days":0},{"station":"PHI","arrived_at":"17:24","launched_at":"17:27","arrived_duration":1044,"launched_duration":1047,"distance":125,"number_of_days":0},{"station":"GIA","arrived_at":"18:15","launched_at":"18:18","arrived_duration":1095,"launched_duration":1098,"distance":168,"number_of_days":0},{"station":"NHO","arrived_at":"18:46","launched_at":"18:49","arrived_duration":1126,"launched_duration":1129,"distance":195,"number_of_days":0},{"station":"NTR","arrived_at":"19:26","launched_at":"20:10","arrived_duration":1166,"launched_duration":1210,"distance":229,"number_of_days":0},{"station":"TCH","arrived_at":"21:47","launched_at":"21:50","arrived_duration":1307,"launched_duration":1310,"distance":322,"number_of_days":0},{"station":"BHO","arrived_at":"03:13","launched_at":"03:16","arrived_duration":1633,"launched_duration":1636,"distance":611,"number_of_days":1},{"station":"SGO","arrived_at":"04:00","launched_at":"04:00","arrived_duration":1680,"launched_duration":1680,"distance":640,"number_of_days":1}],"SQN4":[{"station":"SGO","arrived_at":"19:00","launched_at":"19:00","arrived_duration":1140,"launched_duration":1140,"distance":0,"number_of_days":0},{"station":"DIA","arrived_at":"19:29","launched_at":"19:32","arrived_duration":1169,"launched_duration":1172,"distance":19,"number_of_days":0},{"station":"BHO","arrived_at":"19:44","launched_at":"19:47","arrived_duration":1184,"launched_duration":1187,"distance":29,"number_of_days":0},{"station":"LKH","arrived_at":"20:46","launched_at":"20:49","arrived_duration":1246,"launched_duration":1249,"distance":77,"number_of_days":0},{"station":"MMA","arrived_at":"22:29","launched_at":"22:35","arrived_duration":1349,"launched_duration":1355,"distance":175,"number_of_days":0},{"station":"NTR","arrived_at":"02:52","launched_at":"02:59","arrived_duration":1612,"launched_duration":1619,"distance":411,"number_of_days":1},{"station":"NHO","arrived_at":"03:36","launched_at":"03:39","arrived_duration":1656,"launched_duration":1659,"distance":445,"number_of_days":1},{"station":"GIA","arrived_at":"04:05","launched_at":"04:08","arrived_duration":1685,"launched_duration":1688,"distance":472,"number_of_days":1},{"station":"PHI","arrived_at":"05:23","launched_at":"05:25","arrived_duration":1763,"launched_duration":1765,"distance":515,"number_of_days":1},{"station":"THA","arrived_at":"05:41","launched_at":"05:44","arrived_duration":1781,"launched_duration":1784,"distance":528,"number_of_days":1},{"station":"DTR","arrived_at":"07:33","launched_at":"07:48","arrived_duration":1893,"launched_duration":1908,"distance":630,"number_of_days":1},{"station":"QNH","arrived_at":"08:13","launched_at":"08:13","arrived_duration":1933,"launched_duration":1933,"distance":640,"number_of_days":1}],"YB3":[{"station":"HNO","arrived_at":"06:10","launched_at":"06:10","arrived_duration":370,"launched_duration":370,"distance":0,"number_of_days":0},{"station":"LBI","arrived_at":"06:18","launched_at":"06:21","arrived_duration":378,"launched_duration":381,"distance":2,"number_of_days":0},{"station":"GLA","arrived_at":"06:29","launched_at":"06:32","arrived_duration":389,"launched_duration":392,"distance":5,"number_of_days":0},{"station":"YVI","arrived_at":"06:42","launched_at":"06:44","arrived_duration":402,"launched_duration":404,"distance":11,"number_of_days":0},{"station":"DAN","arrived_at":"07:10","launched_at":"07:12","arrived_duration":430,"launched_duration":432,"distance":21,"number_of_days":0},{"station":"PYE","arrived_at":"07:34","launched_at":"07:36","arrived_duration":454,"launched_duration":456,"distance":39,"number_of_days":0},{"station":"VYE","arrived_at":"07:54","launched_at":"07:57","arrived_duration":474,"launched_duration":477,"distance":54,"number_of_days":0},{"station":"VTR","arrived_at":"08:20","launched_at":"08:22","arrived_duration":500,"launched_duration":502,"distance":73,"number_of_days":0},{"station":"PDU","arrived_at":"08:38","launched_at":"08:40","arrived_duration":518,"launched_duration":520,"distance":82,"number_of_days":0},{"station":"TKE","arrived_at":"08:55","launched_at":"08:57","arrived_duration":535,"launched_duration":537,"distance":91,"number_of_days":0},{"station":"PTO","arrived_at":"09:10","launched_at":"09:13","arrived_duration":550,"launched_duration":553,"distance":99,"number_of_days":0},{"station":"CCH","arrived_at":"09:27","launched_at":"09:29","arrived_duration":567,"launched_duration":569,"distance":108,"number_of_days":0},{"station":"VEN","arrived_at":"09:44","launched_at":"09:47","arrived_duration":584,"launched_duration":587,"distance":118,"number_of_days":0},{"station":"ATH","arrived_at":"10:06","launched_at":"10:09","arrived_duration":606,"launched_duration":609,"distance":131,"number_of_days":0},{"station":"DTH","arrived_at":"10:24","launched_at":"10:26","arrived_duration":624,"launched_duration":626,"distance":141,"number_of_days":0},{"station":"YBA","arrived_at":"10:50","launched_at":"10:50","arrived_duration":650,"launched_duration":650,"distance":155,"number_of_days":0}],"YB4":[{"station":"YBA","arrived_at":"14:45","launched_at":"14:45","arrived_duration":885,"launched_duration":885,"distance":0,"number_of_days":0},{"station":"DTH","arrived_at":"15:06","launched_at":"15:08","arrived_duration":906,"launched_duration":908,"distance":14,"number_of_days":0},{"station":"ATH","arrived_at":"15:22","launched_at":"15:24","arrived_duration":922,"launched_duration":924,"distance":24,"number_of_days":0},{"station":"VEN","arrived_at":"15:43","launched_at":"15:45","arrived_duration":943,"launched_duration":945,"distance":37,"number_of_days":0},{"station":"CCH","arrived_at":"15:59","launched_at":"16:01","arrived_duration":959,"launched_duration":961,"distance":47,"number_of_days":0},{"station":"PTO","arrived_at":"16:15","launched_at":"16:18","arrived_duration":975,"launched_duration":978,"distance":56,"number_of_days":0},{"station":"TKE","arrived_at":"16:32","launched_at":"16:34","arrived_duration":992,"launched_duration":994,"distance":64,"number_of_days":0},{"station":"PDU","arrived_at":"16:49","launched_at":"16:51","arrived_duration":1009,"launched_duration":1011,"distance":73,"number_of_days":0},{"station":"VTR","arrived_at":"17:07","launched_at":"17:09","arrived_duration":1027,"launched_duration":1029,"distance":82,"number_of_days":0},{"station":"VYE","arrived_at":"17:33","launched_at":"17:35","arrived_duration":1053,"launched_duration":1055,"distance":101,"number_of_days":0},{"station":"PYE","arrived_at":"17:55","launched_at":"17:57","arrived_duration":1075,"launched_duration":1077,"distance":116,"number_of_days":0},{"station":"DAN","arrived_at":"18:22","launched_at":"18:24","arrived_duration":1102,"launched_duration":1104,"distance":134,"number_of_days":0},{"station":"YVI","arrived_at":"18:44","launched_at":"18:46","arrived_duration":1124,"launched_duration":1126,"distance":144,"number_of_days":0},{"station":"GLA","arrived_at":"18:58","launched_at":"19:01","arrived_duration":1138,"launched_duration":1141,"distance":150,"number_of_days":0},{"station":"LBI","arrived_at":"19:09","launched_at":"19:12","arrived_duration":1149,"launched_duration":1152,"distance":153,"number_of_days":0},{"station":"HNO","arrived_at":"19:20","launched_at":"19:20","arrived_duration":1160,"launched_duration":1160,"distance":155,"number_of_days":0}]};
function station_name(id){return STATIONS[id][0]}
function station_p(id){return STATIONS[id][1]}
function render_total_time(line_id, train_id) {
  first_stop = TRAINS[train_id][0];
  last_stop = TRAINS[train_id][TRAINS[train_id].length-1];
  du = last_stop['arrived_duration'] - first_stop['launched_duration'];
  d = Math.floor(du/1440);
  d_purl = d > 1 ? "s":"";
  h = Math.floor((du - d * 1440)/60);
  h_purl = h > 1 ? "s":"";
  m = Math.floor(du - d * 1440 - h * 60);
  m_purl = m > 1 ? "s":"";
  _d = d > 0 ? `${d} day${d_purl} ` : "";
  _h = h > 0 ? `${h} hour${h_purl} ` : "";
  o = `${_d}${_h}${m} minute${m_purl}`;
  document.querySelector(`#${line_id} .total-time`).innerHTML = o;
}
function render_total_stops(line_id, train_id) {
  document.querySelector(`#${line_id} .total-stops`).innerHTML = TRAINS[train_id].length;
}
// render_train_schedule
function render_ts(line_id, train_id) {
  render_total_time(line_id, train_id);
  render_total_stops(line_id, train_id);
  var html = ``
  TRAINS[train_id].forEach(function(stop, i){
    is_last_stop = TRAINS[train_id].length === i+1;
    station_id = stop['station'];
    day =stop['number_of_days']+1;
    p = station_p(station_id);
    s = `s-${p}`;
    h = is_last_stop ? "hide-path":"";
    t = p == 1 ? "text-muted" : "text-danger";
    bg = `day-${day}`;
    html += `<tr class="${bg}">
        <th>${day}</th>
        <td><i class="fa fa-circle station-index ${s} ${h} ${t}"></i></td>
        <td>${station_name(station_id)}</td>
        <td>${stop['arrived_at']}</td>
        <td>${stop['distance']}</td>
      </tr>`
  })
  document.querySelector(`#${line_id} tbody`).innerHTML = html;
  active_train_tab(line_id, train_id)
}
function active_train_tab(line_id, train_id) {
  document.querySelectorAll(`#${line_id} .train`).forEach(function(e){
    e.className = e.className.replace(/\bactive\b/g, "");
  })
  document.querySelector(`#${line_id} .train-${train_id}`).className += ' active';
}

(function() {
  var list = document.querySelectorAll('.train');
  list.forEach(function(e){
    e.addEventListener('click', function(){
      l = e.getAttribute('data-line-id')
      t = e.getAttribute('data-train-id')
      render_ts(l, t)
    })
  })
  render_ts('line-HNO-SGO', 'SE1')
  render_ts('line-HNO-DNA', 'SE19')
  render_ts('line-HNO-VIN', 'SE35')
  render_ts('line-HUE-SGO', 'SE21')
  render_ts('line-NTR-SGO', 'SNT1')
  render_ts('line-PTH-SGO', 'SPT1')
  render_ts('line-QNH-SGO', 'SQN1')
  render_ts('line-SGO-HNO', 'SE2')
  render_ts('line-DNA-HNO', 'SE20')
  render_ts('line-VIN-HNO', 'SE36')
  render_ts('line-SGO-HUE', 'SE22')
  render_ts('line-SGO-NTR', 'SNT2')
  render_ts('line-SGO-PTH', 'SPT2')
  render_ts('line-SGO-QNH', 'SQN4')

  render_ts('line-HNO-LCA', 'SP1')
  render_ts('line-HNO-YBA', 'YB3')
  render_ts('line-LCA-HNO', 'SP2')
  render_ts('line-YBA-HNO', 'YB4')

  render_ts('line-HNO-DDA', 'DD5')
  render_ts('line-DDA-HNO', 'DD6')

  render_ts('line-YVI-HLO', '51501')
  render_ts('line-HLO-YVI', '51502')

  render_ts('line-HNO-HPH', 'HP1')
  render_ts('line-HPH-HNO', 'HP2')

  render_ts('line-HNO-QTR', 'QT1')
  render_ts('line-QTR-HNO', 'QT2')
})();
</script>