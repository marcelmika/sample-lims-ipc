<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects/>

<%-- CREATE CONVERSATION --%>
<div class="create-conversation">
    <strong>Create Conversation</strong>

    <p>
        Fill the user ids separated with comma and press the button to create a conversation with the user(s).
        If you fill in a single user id, single user chat conversation will be created. If you fill in multiple
        user ids separated by comma a multi user chat will be created.
    </p>

    <div><input type="text" title="user id's separated by comma" placeholder="e.g. 10434,10567" value="10567"/></div>
    <div>
        <button class="btn">Create conversation</button>
    </div>
    <br/>

    <p class="result alert"></p>
</div>

<%-- OPEN CONVERSATION --%>
<div class="open-conversation">
    <strong>Open Conversation</strong>

    <p>
        Create conversation and then fill the conversation id to open it.
    </p>

    <div>
        <input class="conversation-id" type="text" title="Conversation ID" placeholder="Conversation ID" value=""/>
    </div>
    <div>
        <button class="btn">Open conversation</button>
    </div>
    <br/>

    <p class="result alert"></p>
</div>

<%-- READ PRESENCE --%>
<div class="read-presence">
    <strong>Read Presence</strong>

    <p>
        Fill the user ids separated with comma and press the button to read their presence status.
    </p>

    <div><input type="text" title="user id's separated by comma" placeholder="e.g. 10434,10567" value="10567"/></div>
    <div>
        <button class="btn">Read presence</button>
    </div>
    <br/>

    <p class="result alert"></p>
</div>

<%-- PRESENCE UPDATED --%>
<div class="presence-updated">
    <strong>Presence Updated Subscription</strong>

    <p>
        Any user presence change will be listed in the section below:
    </p>

    <p class="presence-list result alert"></p>
</div>

<%-- UNREAD MESSAGES COUNT UPDATED --%>
<div class="unread-message-count-updated">
    <strong>Unread Messages Count Updated Subscription</strong>

    <p>
        Number of unread messages will be shown in the section below:
    </p>

    <p class="result alert">Unread Messages: <span class="unread-messages"></span></p>
</div>
