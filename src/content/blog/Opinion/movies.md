---
layout: post
author:
title: "All the films I've ever watched"
date: 2022-01-31 0:49:11 +1100
tags: movies
categories: life movies
permalink: "/life/movies"
---

This is a mostly comprehensive list of all films I've watched, and my reviews of selected films.

The vast majority of the films I've watched are at the cinemas, normally Village, or on free-to-air commercial TV. I
also watched many films during classes in both primary school and high school. In high school, we mainly watched films in Christian Education (CE) and English. In primary school we watched films during class, and we also went on a couple of excursions. I remember pretty well when I watched the films, but not all dates watched will be 100% accurate. I've watched many of these films multiple times.

*Films with an asterix are films I never finished. We were evacuated in the middle of our showing of The Martian due to flooding concerns from heavy rain, and I never went back to finish it. We went into lockdown after one period watching The Passion of the Christ. We never finished Troy in class.

<h3>Film Reviews</h3>
<ul class="post-list">
{%- for post in site.categories.movies -%}
  <li>
      {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
      <span class="post-meta" style="text-transform:capitalize">{{ post.date | date: date_format }}</span>
      <h4>
          <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
          </a>
      </h4>
      {%- if site.show_excerpts -%}
      {{ post.excerpt }}
      {%- endif -%}
  </li>
{%- endfor -%}
</ul>

<h3>All the films I've ever watched</h3>

<b>This table is sortable.</b>

Click on the header row to sort. Took me forever to work out how to integrate some code I found on a <a href="https://www.youtube.com/watch?v=8SL_hM1a0yo">YouTube tutorial</a>. I had to alter the default code I found on official Jekyll documentation on tabulating CSV data <a href="https://jekyllrb.com/tutorials/csv-to-table/">here</a>. 

<style>
  .table-sortable th {
    cursor: pointer;
  }

  .table-sortable .th-sort-asc::after {
    content: "\25b4";
  }

  .table-sortable .th-sort-desc::after {
    content: "\25be";
  }

  .table-sortable .th-sort-asc::after,
  .table-sortable .th-sort-desc::after {
    margin-left: 5px;
  }

  .table-sortable .th-sort-asc,
  .table-sortable .th-sort-desc {
    background: rgba(0, 0, 0, 0.1);
  }
</style>



<table class="table-sortable">
  <thead>
  <tr>
    {% for pair in site.data.movies_list[0] %}
    <th>{{ pair[0] }}</th>
    {% endfor %}

  </tr>
  </thead>

  <tbody>
  {% for row in site.data.movies_list %}

  <tr>
    {% for pair in row %}
    <td>{{ pair[1] }}</td>
    {% endfor %}
  </tr>

  {% endfor %}

  </tbody>

</table>

<script src="{{site.baseurl}}/assets/js/table.js"></script>
