"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62490],{81478:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>o,data:()=>c});var n=t(24691);const a={},o=(0,t(88242).A)(a,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i[8]||(i[8]=(0,n.Lk)("h1",{id:"philips-9290030674",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#philips-9290030674"},[(0,n.Lk)("span",null,"Philips 9290030674")])],-1)),(0,n.Lk)("table",null,[i[6]||(i[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[i[2]||(i[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"9290030674")],-1)),(0,n.Lk)("tr",null,[i[1]||(i[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Philips"},{default:(0,n.k6)((()=>i[0]||(i[0]=[(0,n.eW)("Philips")]))),_:1})])]),i[3]||(i[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Hue motion outdoor sensor")],-1)),i[4]||(i[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"temperature, occupancy, battery, illuminance_lux, illuminance, motion_sensitivity, led_indication, occupancy_timeout, linkquality")],-1)),i[5]||(i[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/9290030674.png",alt:"Philips 9290030674"})])],-1))])]),i[9]||(i[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To initiate setup mode, press and hold the setup button on the rear of the device for +- 5 seconds until the setup light blinks red. Then press and hold the setup button again until the light starts blinking orange. It is now in pairing mode. When paired, the light blinks green.</p><p>Please note that the setup light is below the main sensor (as opposed to the obvious indicator above the main sensor).</p><p>This specific device has been reported to have issues repairing to a Zigbee network after upgrading from a CC2531 to a CC2652 controller (Zigbee 1.2 to 3.0). (Re)pairing may only work after pairing the device to another network and channel first (has been tested with a Philips Hue 2.0 hub in this instance) before pairing it back to the Zigbee2MQTT network again.</p><p>Using Conbee II there are reported issues with re-pairing after a power outage. This may be overcome by setting permit_join for the network to true in your config file.</p><h3 id="motion-sensitivity" tabindex="-1"><a class="header-anchor" href="#motion-sensitivity"><span>Motion sensitivity</span></a></h3><p>The motion sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;motion_sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code> (default).</p><h3 id="occupancy-timeout" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout"><span>Occupancy timeout</span></a></h3><p>Sets the sensors timeout between last motion detected and sensor reporting occupancy as false</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// Value &gt;= 0,</span></span>\n<span class="line">    <span class="token comment">// 0 - 10: 10sec (min possible timeout)</span></span>\n<span class="line">    <span class="token comment">//   &gt; 10: timeout in sec</span></span>\n<span class="line">    <span class="token comment">// (must be written to (default) endpoint 2)</span></span>\n<span class="line">    <span class="token string-property property">&quot;occupancy_timeout&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',12)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>i[7]||(i[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,n.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="motion-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#motion-sensitivity-enum"><span>Motion sensitivity (enum)</span></a></h3><p>Value can be found in the published state on the <code>motion_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motion_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motion_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code>, <code>max</code>.</p><h3 id="led-indication-binary" tabindex="-1"><a class="header-anchor" href="#led-indication-binary"><span>Led indication (binary)</span></a></h3><p>Blink green LED on motion detection. Value can be found in the published state on the <code>led_indication</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_indication&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_indication&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led indication is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric"><span>Occupancy timeout (numeric)</span></a></h3><p>Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20))])}]]),c=JSON.parse('{"path":"/devices/9290030674.html","title":"Philips 9290030674 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Philips 9290030674 control via MQTT","description":"Integrate your Philips 9290030674 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-29T06:53:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Motion sensitivity","slug":"motion-sensitivity","link":"#motion-sensitivity","children":[]},{"level":3,"title":"Occupancy timeout","slug":"occupancy-timeout","link":"#occupancy-timeout","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Motion sensitivity (enum)","slug":"motion-sensitivity-enum","link":"#motion-sensitivity-enum","children":[]},{"level":3,"title":"Led indication (binary)","slug":"led-indication-binary","link":"#led-indication-binary","children":[]},{"level":3,"title":"Occupancy timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1731266723000},"filePathRelative":"devices/9290030674.md"}')}}]);