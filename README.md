Assignment 1 - Hello World: GitHub and d3  
===

>>Github Pages link:https://zihao777.github.io/01-ghd3/

- According to statistical data, draw histograms and pie charts to reflect statistical characteristics
- According to temparature dataset, reflect the temperature trend of Hubei Province throughout the year through the line chart
- Draw the map of Hubei Province
![Image text](https://github.com/zihao777/01-ghd3/blob/main/Assignment1-1.png)
![Image text](https://github.com/zihao777/01-ghd3/blob/main/Assignment1-2.png)
Technical achievement
---

1. Learned to create basic primitives, scales and coordinate axes with d3.js.
2. Learned to create pie chart, histogram and line chart.
3. Learned to draw a map with d3 based on the obtained geoJson file.
4. Added some interactive animate features.

Design Achievement
---

1. In the pie chart, padAngle is added to make it look more comfortable. Each arc has a line pointing to its class name.
2. In the map, when the mouse passes over a specific province, the place of that province on the map will gradually turn orange within 0.4 seconds and the name of the province will be displayed above the mouse. After the mouse is left, the color will gradually return to normal within 0.4 seconds and the name bar will disappear. 

Tips
---
- Official document: https://github.com/d3/d3/blob/master/API.md#shapes-d3-shape
- geoJson resources: http://datav.aliyun.com/tools/atlas/#&lat=30.316551722910077&lng=106.68898666525287&zoom=3.5
- https://juejin.cn/post/6844904021027733511
