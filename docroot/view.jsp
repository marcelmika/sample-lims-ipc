<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<portlet:defineObjects/>

<div class="create-conversation">
    <strong>Create Conversation</strong>

    <p>
        Fill the user id's separated with comma and press the button to create a conversation with the user(s).
        If you fill in a single user id, single user chat conversation will be created. If you fill in multiple
        user ids separated by comma a multi user chat will be created.
    </p>
    <button class="btn">Create conversation</button>
    <input type="text" title="user id's separated by comma" placeholder="e.g. 10434,10567" value="10567"/>

    <p class="result alert"></p>
</div>

<div class="read-presence">
    <strong>Read Presence</strong>

    <p>
        Fill the user id's separated with comma and press the button to read their presence status.
    </p>
    <button class="btn">Read presence</button>
    <input type="text" title="user id's separated by comma" placeholder="e.g. 10434,10567" value="10567"/>

    <p class="result alert"></p>
</div>
