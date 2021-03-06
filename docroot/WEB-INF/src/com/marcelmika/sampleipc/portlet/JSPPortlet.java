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
package marcelmika.sampleipc.portlet;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;

import javax.portlet.*;
import java.io.IOException;

public class JSPPortlet extends GenericPortlet {

    @Override
    public void doDispatch(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws IOException, PortletException {

        String mvcPath = renderRequest.getParameter("mvcPath");

        if (mvcPath != null) {
            include(mvcPath, renderRequest, renderResponse);
        } else {
            super.doDispatch(renderRequest, renderResponse);
        }
    }

    @Override
    public void doEdit(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws IOException, PortletException {

        if (renderRequest.getPreferences() == null) {
            super.doEdit(renderRequest, renderResponse);
        } else {
            include(editJSP, renderRequest, renderResponse);
        }
    }

    @Override
    public void doHelp(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws IOException, PortletException {

        include(helpJSP, renderRequest, renderResponse);
    }

    @Override
    public void doView(
            RenderRequest renderRequest, RenderResponse renderResponse)
            throws IOException, PortletException {

        include(viewJSP, renderRequest, renderResponse);
    }

    @Override
    public void init() throws PortletException {
        editJSP = getInitParameter("edit-jsp");
        helpJSP = getInitParameter("help-jsp");
        viewJSP = getInitParameter("view-jsp");
    }

    @Override
    public void processAction(
            ActionRequest actionRequest, ActionResponse actionResponse)
            throws IOException, PortletException {
    }

    protected void include(
            String path, RenderRequest renderRequest,
            RenderResponse renderResponse)
            throws IOException, PortletException {

        PortletRequestDispatcher portletRequestDispatcher =
                getPortletContext().getRequestDispatcher(path);

        if (portletRequestDispatcher == null) {
            _log.error(path + " is not a valid include");
        } else {
            portletRequestDispatcher.include(renderRequest, renderResponse);
        }
    }

    protected String editJSP;
    protected String helpJSP;
    protected String viewJSP;

    private static Log _log = LogFactoryUtil.getLog(JSPPortlet.class);

}