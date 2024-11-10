"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24173],{5739:(e,i,n)=>{n.r(i),n.d(i,{comp:()=>o,data:()=>r});var a=n(24691);const t={},o=(0,n(88242).A)(t,[["render",function(e,i){const n=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i[13]||(i[13]=(0,a.Fv)('<h1 id="allowing-devices-to-join" tabindex="-1"><a class="header-anchor" href="#allowing-devices-to-join"><span>Allowing devices to join</span></a></h1><p>To allow devices to join the network joining has to be permitted. There are various ways to do this:</p><h3 id="frontend-recommended" tabindex="-1"><a class="header-anchor" href="#frontend-recommended"><span>Frontend (recommended)</span></a></h3><p>Enabling joining via the frontend ensures that joining is disabled automatically after 255 seconds. The joining button can be found in the right top.</p><h2 id="pairing-via-a-specific-device" tabindex="-1"><a class="header-anchor" href="#pairing-via-a-specific-device"><span>Pairing via a specific device</span></a></h2><p>To the right of Permit join (All) button is an arrow pointing down. This will allow you to pick any router to join from. That is not a guarantee the router is chosen. This can be useful especially for Aqara devices or a switch to a light bulb.</p><h3 id="mqtt-recommended" tabindex="-1"><a class="header-anchor" href="#mqtt-recommended"><span>MQTT (recommended)</span></a></h3>',7)),(0,a.Lk)("p",null,[i[1]||(i[1]=(0,a.eW)("The ")),i[2]||(i[2]=(0,a.Lk)("code",null,"zigbee2mqtt/bridge/request/permit_join",-1)),i[3]||(i[3]=(0,a.eW)(" MQTT topic can be used to enable joining. It is recommended to provide a value for ")),i[4]||(i[4]=(0,a.Lk)("code",null,"time",-1)),i[5]||(i[5]=(0,a.eW)(" to ensure joining is automatically disabled. See ")),(0,a.bF)(n,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request-permit-join"},{default:(0,a.k6)((()=>i[0]||(i[0]=[(0,a.eW)("MQTT topic and messages")]))),_:1}),i[6]||(i[6]=(0,a.eW)(" for more information."))]),i[14]||(i[14]=(0,a.Lk)("h3",{id:"configuration-yaml-not-recommended",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#configuration-yaml-not-recommended"},[(0,a.Lk)("span",null,"Configuration.yaml (not recommended)")])],-1)),i[15]||(i[15]=(0,a.Lk)("p",null,[(0,a.eW)("By setting "),(0,a.Lk)("code",null,"permit_join: true"),(0,a.eW)(" in your "),(0,a.Lk)("code",null,"configuration.yaml"),(0,a.eW)(" the joining will automatically be enabled when starting Zigbee2MQTT. Joining is "),(0,a.Lk)("strong",null,"not"),(0,a.eW)(" automatically disabled.")],-1)),i[16]||(i[16]=(0,a.Lk)("h2",{id:"pairing",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#pairing"},[(0,a.Lk)("span",null,"Pairing")])],-1)),(0,a.Lk)("p",null,[i[8]||(i[8]=(0,a.eW)("First check if the device page (")),(0,a.bF)(n,{to:"/supported-devices/"},{default:(0,a.k6)((()=>i[7]||(i[7]=[(0,a.eW)("Supported devices")]))),_:1}),i[9]||(i[9]=(0,a.eW)(", click on the model number) contains instructions on how to pair your device."))]),i[17]||(i[17]=(0,a.Fv)('<p>If no instructions are available, the device can probably be paired by factory resetting it.</p><p>Once you see something similar to below in the log your device is paired.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:info  2019-11-09T12:19:56: Successfully interviewed &#39;0x00158d0001dc126a&#39;, device has successfully been paired</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',3)),(0,a.Lk)("p",null,[i[11]||(i[11]=(0,a.eW)("In case there are issues when pairing, see the ")),(0,a.bF)(n,{to:"/guide/faq/#why-does-my-device-not-or-fail-to-pair"},{default:(0,a.k6)((()=>i[10]||(i[10]=[(0,a.eW)("FAQ")]))),_:1}),i[12]||(i[12]=(0,a.eW)(" for possible fixes."))])])}]]),r=JSON.parse('{"path":"/guide/usage/pairing_devices.html","title":"Allowing devices to join","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":3,"title":"Frontend (recommended)","slug":"frontend-recommended","link":"#frontend-recommended","children":[]},{"level":2,"title":"Pairing via a specific device","slug":"pairing-via-a-specific-device","link":"#pairing-via-a-specific-device","children":[{"level":3,"title":"MQTT (recommended)","slug":"mqtt-recommended","link":"#mqtt-recommended","children":[]},{"level":3,"title":"Configuration.yaml (not recommended)","slug":"configuration-yaml-not-recommended","link":"#configuration-yaml-not-recommended","children":[]}]},{"level":2,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}],"git":{"updatedTime":1731266723000},"filePathRelative":"guide/usage/pairing_devices.md"}')}}]);