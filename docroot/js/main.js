/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Marcel Mika, marcelmika.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

AUI().use('aui-base', function (A) {

    // Wait until the lims portlet is ready
    Liferay.on('lims:ready', function () {


        ///////////////////////////////////////////////////////////////////////////////////////////////
        // CREATE CONVERSATION
        ///////////////////////////////////////////////////////////////////////////////////////////////

        // Attach click event on the create conversation button
        A.one('.create-conversation button').on('click', function () {

            // Read user id's from the input. Normally, you would already have a list
            // of users with whom you want to create a conversation but for our purpose
            // we take a list of users from the input and parse it.
            var data = A.one('.create-conversation input').get('value').split(',');

            // Create IPC request
            Liferay.fire('lims:createConversation', {

                // Data is an array of users id's e.g [10434,10567]
                data: data,

                // Called on request success
                success: function (response) {

                    // Prepare result message
                    var message = "OK!" +
                        "<br/>Conversation id: " + response.conversationId;

                    // Show user the result
                    A.one('.create-conversation .result').set('innerHTML', message);
                },

                // Called on request failure
                failure: function (code, reason) {

                    // Prepare result message
                    var message = "Error! Code[" + code + "] Reason: " + reason;

                    // Show user the result
                    A.one('.create-conversation .result').set('innerHTML', message);
                }
            });
        });


        ///////////////////////////////////////////////////////////////////////////////////////////////
        // OPEN CONVERSATION
        ///////////////////////////////////////////////////////////////////////////////////////////////

        // Attach click event on the open conversation button
        A.one('.open-conversation button').on('click', function () {

            // Get the conversation id
            var conversationId = A.one('.open-conversation .conversation-id').get('value');

            // Create IPC request
            Liferay.fire('lims:openConversation', {

                // Pass data to the event
                data: {
                    conversationId: conversationId
                },

                // Called on request success
                success: function () {

                    // Prepare result message
                    var message = "OK!";

                    // Show user the result
                    A.one('.open-conversation .result').set('innerHTML', message);
                },

                // Called on request failure
                failure: function (code, reason) {

                    // Prepare result message
                    var message = "Error! Code[" + code + "] Reason: " + reason;

                    // Show user the result
                    A.one('.open-conversation .result').set('innerHTML', message);
                }
            });
        });


        ///////////////////////////////////////////////////////////////////////////////////////////////
        // READ PRESENCE
        ///////////////////////////////////////////////////////////////////////////////////////////////

        // Attach click event on the read presence button
        A.one('.read-presence button').on('click', function () {

            // Read user id's from the input. Normally, you would already have a list
            // of users of whom you want to read the presence but for our purpose
            // we take a list of users from the input and parse it.
            var data = A.one('.read-presence input').get('value').split(',');

            // Create IPC request
            Liferay.fire('lims:readPresence', {

                // Data is an array of users id's e.g [10434,10567]
                data: data,

                // Called on request success
                success: function (response) {

                    // Clear the previous result if any
                    A.one('.read-presence .result').set('innerHTML', '');

                    // Iterate over response and show user presences
                    A.Array.each(response, function (user) {

                        // Prepare single row user id and related presence
                        var row = user.userId + ' : ' + user.presence + '<br/>';

                        A.one('.read-presence .result').append(row);
                    });
                },

                // Called on request failure
                failure: function (code, reason) {

                    // Prepare result message
                    var message = "Error! Code[" + code + "] Reason: " + reason;

                    // Show user the result
                    A.one('.read-presence .result').set('innerHTML', message);
                }
            });
        });

        ///////////////////////////////////////////////////////////////////////////////////////////////
        // PRESENCE UPDATED
        ///////////////////////////////////////////////////////////////////////////////////////////////

        // Subscribe to the presence updated event
        Liferay.on('lims:presenceUpdated', function (event) {

            // Get the presence list div
            var presenceList = A.one('.presence-list');

            // Clear previous values
            presenceList.set('innerHTML', '');

            // Add users to the list
            A.Array.each(event.users, function (user) {
                presenceList.append('<span>' + user.userId + ':' + user.presence + '</span><br/>');
            });
        });

        ///////////////////////////////////////////////////////////////////////////////////////////////
        // UNREAD MESSAGE COUNT UPDATED
        ///////////////////////////////////////////////////////////////////////////////////////////////

        // Subscribe to the unread message count updated event
        Liferay.on('lims:unreadMessagesCountUpdated', function (event) {

            // Vars
            var unreadMessageCount = event.count,
                spanElement = A.one('.unread-messages');

            // Update counter
            spanElement.set('innerHTML', unreadMessageCount);
        });

    });
});