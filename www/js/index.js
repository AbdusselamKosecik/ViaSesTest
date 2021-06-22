/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

var inAppBrowserRef;

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Uygulama açılırken inappbrowser plugini ile webrtc sitesini açıyoruz
    // webrtc urli yazın
    openInAppBrowser("http://www.example.com/");
    
}

function openInAppBrowser(url) {

    var target = "_blank",
    options = "location=no,hidden=yes";

    inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);

    inAppBrowserRef.addEventListener('message', messageCallBack);
}

function loadStopCallBack() {
    if (inAppBrowserRef != undefined) {
        inAppBrowserRef.executeScript({ 
            code: "\
                var message = 'this is the message';\
                var messageObj = {my_message: message};\
                var stringifiedMessageObj = JSON.stringify(messageObj);\
                webkit.messageHandlers.cordova_iab.postMessage(stringifiedMessageObj);\
                console.log('message sending' + stringifiedMessageObj);"
        });

        inAppBrowserRef.show();
    }
}

function messageCallBack(params){
    console.log("message received: "+ JSON.stringify(params.data));
}
