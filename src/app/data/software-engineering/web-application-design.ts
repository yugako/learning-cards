export const webApplicationDesignCards = [
  {
    question: 'Що таке SPA & MPA? Різниця',
    answer: `
        Websites that are built with single-page applications (SPAs) only consist of one single page. Basically, when the user is surfing the website mostly wherever he chooses to press – he remains on the same platform. What SPAs are so great about, is that the page does not reload during its use and does not rely on navigating through different websites. If you have been on platforms like Facebook, Gmail, Twitter, GitHub and so on, you have already met the best examples of SPA. It is one of its’ greatest features that when the page loads, only data is sent back-and-forth, and the website executes everything within itself rather than going through servers every time.
    <br>
    Different from SPAs, multi-page applications (MPAs) are complex websites. To put it more simply, it is a traditional web application that reloads the entire page whenever the user interacts with the website. Each time that the data is exchanged, the application makes a request from the server to display different information in the browser. The main reason why it differs so much from the single-page applications, MPAs take time to execute the information exchanges, meaning that the user experience can be harmed if the servers connect slowly or the internet connection is poor. If you want to see an example of how multi-page applications work, head over to the websites like Amazon, eBay, or every other traditional website. You’ll notice that each time you press on the website, you’re being redirecting to another page. MPA sites consist of many micro-websites and subsections to distribute content across the platform.
    <br>
    Hybrid - MPA, and SPA combined. In the Hybrid app, each page has to be compiled and could share some resources. Every page has own JS routing like wizards or subcomponents. Data is loaded both during page load and AJAX.
    `,
    category: 'web-application-design'
  },
  {
    question: 'Де легше реалізувати секюність в SPA чи MPA? ЧОМУ?',
    answer: `
    Depends on.. I guess MPA
    SPA:<br>
    All you have to do to keep your page safe is secure data endpoints which is much faster but not necessarily safer. SPA’s are more prone to hacker attacks, as they run on JavaScript which doesn’t perform code compilation making it more vulnerable to malware.

    Compared to the “traditional” application, SPA is less secure. Due to Cross-Site Scripting (XSS), it enables attackers to inject client-side scripts into the web application by other users.

    You can secure your data endpoints and separate the JS that gets downloaded by a client into multiple isolated pieces.

    This way, attackers won’t be able to access all your code at once.
    <br><br>
    MPA:<br>
    Maintaining security may become a real challenge because developers have to secure each separate page.
    `,
    category: 'web-application-design'
  },
  {
    question: 'Pros & Cons of SPA & MPA',
    answer: `
        <table border="1" cellpadding="1" cellspacing="1" role="table">
        <tr>
          <th scope="col"></th>
          <th scope="col">SPA</th>
          <th scope="col">MPA</th>
        </tr>
        <tr>
          <td>Ideal For</td>
          <td>Ideal for a company with a single product to get real-time experience without page refresh. </td>
          <td>Ideal for a large company that offers a wide variety of products, if you need a lot of user interaction and technical features in your app, large e-commerce stores and marketplaces like eBay, huge web portals.

      Ideal for websites that have a lot of content (such as news portals) and require flawless SEO.</td>
        </tr>
          <tr>
          <td>Pros</td>
          <td><ul>
      <li>Sleek UX</li>
      <li>Speed</li>
      <li>Offline functionality</li>
      <li>Mobile adaptability</li>
      <li>Decoupled Backend and Frontend</li>
      </ul></td>
          <td><ul>
      <li>SEO</li>
      <li>JavaScript Dependency</li>
      <li>Memory leaks</li>
      </ul></td>
        </tr>
        <tr>
          <td>Cons</td>
          <td><ul>
      <li>Simple SEO</li>
      <li>Fast launch</li>
      <li>Many existed boxed solutions</li>
      <li>Works without javascript</li>
      <li>Wide options for security configuration</li>
      </ul></td>
          <td><ul>
      <li>Slowness due to the full page reload</li>
      <li>Coupled Backend and Frontend</li>
      <li>Complex Development process</li>
      </ul></td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>SPA is quite fast, as most resources (HTML+CSS+Scripts) are only loaded once throughout the lifespan of the application. Only data is transmitted back and forth and no full page refreshes are occurring as the user navigates through the application

      At the same time SPA can be slow due to client-side rendering. Before your browser can render the page, it has to load bulky JS frameworks. This could take a while, especially for the large application. But after the first render, SPAs become much faster than MPAs.

      Fortunately, there are ways to speed up the SPA initialization such as loading assets dynamically, minimizing the scripts, etc

      </td>
          <td>MPA is much slow from User Experience perspective as the browser must reload the entire page from scratch whenever the user wants to access new data or moves to a different part of the website.</td>
        </tr>
        <tr>
          <td>Scalability</td>
          <td>In SPAs, the business logic is built into separate components that are easy to develop and maintain. But making changes to the app’s architecture is a whole other story. A single feature may consist of several components and altering a commonly used element can affect other parts of the application.

      That’s why you have to take into account the future changes to the SPA’s functionality during the planning stage. If you have a clear vision of where your application is heading, the developers will be able to factor in the possible changes before the architecture is set in stone.</td>
          <td>With the traditional approach (MPA), the application’s functionality is spread over multiple pages. You can gradually add content and expand the page count. It’s also relatively easy to alter a part of your MPA without affecting the other pages.

      If you want, for example, to change the application’s framework, you can do it page by page until the whole MPA is redesigned.</td>
        </tr>
        <tr>
          <td>Maintainability</td>
          <td>The development is simplified and streamlined. There is no need to write code to render pages on the server. It is much easier to get started because you can usually kick off development from a file file://URI, without using any server at all.</td>
          <td>The development becomes quite complex. The developer needs to use frameworks for either client and server side. This results in a long time of application development.

      Testing gets rigorous, as there are no clear distinctions between User Interface and data.</td>
        </tr>
        <tr>
          <td>Deployment</td>
          <td>A single page application is super-simple to deploy: it's really just one index.html file, with a CSS bundle and a Javascript bundle.

      These 3 static files can be uploaded to any static content server like Apache, Nginx, Amazon S3 or Firebase Hosting.</td>
          <td>Deployment and configuration could be complicated and depend on the boxed solution and technology stack. For example, Magento deployment for an e-commerce web application or Elgg for social networks.</td>
        </tr>
      </table>

    `,
    category: 'web-application-design'
  },
  {
    question: 'Що таке SSR? Pros & Cons',
    answer: `
SSR is not a new concept. It has been used since the first backend solution, like PHP or JAVA. Server-side rendering is a method to render your website. When the user opens your page, his browser makes a request to the server, and the server generates ready to provide HTML. When the request is received on the server-side, it compiles everything. Every time the client navigates to a different route, the server will do the work all over again.
        <img  width="600" src="https://res.cloudinary.com/practicaldev/image/fetch/s--Bdp-T1rh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/w46xh1vjb96yxz3gjlu9.png">

    `,
    category: 'web-application-design'
  },
  {
    question: 'Що таке CSR? Pros & Cons',
    answer: `
    CSR - With a client-side rendering solution, when the user opens your website, his browser makes a request to the server, and the user gets a response with a single HTML file without any content, loading screen, e.t.c. It’s a blank page until the browser fetches all linked JavaScripts and lets the browser compile everything before rendering the content. If there is some data which needs to be rendered to the page, the client will make a request to the api to take the data and then render it to the page. If the client navigates to a different route, the server will not send the page again, instead, the client will re-render the page according to the route that client requested
    <img  width="600" src="https://res.cloudinary.com/practicaldev/image/fetch/s--U_LYEgDh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/wx32o0wtgqa3lxv9izgk.png">

    `,
    category: 'web-application-design'
  },
  {
    question: 'SSR vs CSR?',
    answer: `
      <table style="width:100%"  border="1" cellpadding="1" cellspacing="1" role="table">
        <tr>
          <th scope="col"></th>
          <th scope="col">CSR</th>
          <th scope="col">SSR</th>
        </tr>
        <tr>
          <td>Ideal For</td>
          <td><ul><li><span style="color: rgb(0,0,128);">If you building a SPA (single page application), and you don’t want to configure everything on the server side like: i18n, router e.t.c. you can just use&nbsp;<strong>create-react-app, angular-cli, vue-cli, </strong>etc</span></li><li><span style="color: rgb(0,0,128);">if your site has rich interactions, CSR may fit your needs more</span></li></ul></td>
          <td><ul><li><span style="color: rgb(0,0,128);">If you want to build site which is mostly static (blog, portfolio, landing page), use frameworks like&nbsp;<strong>Gatsby</strong>, it’s not SSR, but it pre-renders the website into HTML at the build time</span></li><li><span style="color: rgb(0,0,128);">If you want to build a web app and you care about SEO, easier social media optimization and faster render for user you should think about SSR and framework like&nbsp;<strong>next.js, nuxt.js, </strong>etc</span></li><li><span style="color: rgb(0,0,128);">if the content of your website doesn't need much user interaction, SSR might be the right choice</span></li></ul></td>
        </tr>
        <tr>
          <td>Pros</td>
          <td><ul style="text-align: left;"><li><span style="color: rgb(0,0,128);">Fast render after initial load</span></li><li><span style="color: rgb(0,0,128);">Faster navigation</span></li><li><span style="color: rgb(0,0,128);">Lower server load</span></li><li><span style="color: rgb(0,0,128);">Rich site interactions</span></li><li><span style="color: rgb(0,0,128);">Robust JS library selection</span></li><li><span style="color: rgb(0,0,128);">Remarkable for web apps</span></li></ul></td>
          <td><ul style="text-align: left;"><li><span style="color: rgb(0,0,128);">SEO friendly – SSR guarantees your pages are easily indexable by search engines</span></li><li><span style="color: rgb(0,0,128);">Better performance for the user – User will see the content faster</span></li><li><span style="color: rgb(0,0,128);">Social Media Optimization: When people try to post your link on Facebook, Twitter, etc. then a nice preview will show up with the page title, description, and image.</span></li><li><span style="color: rgb(0,0,128);">Shared code with backend node</span></li><li><span style="color: rgb(0,0,128);">User-machine is less busy</span></li></ul></td>
        </tr>
        <tr>
          <td>Cons</td>
          <td><ul style="text-align: left;"><li><span style="color: rgb(0,0,128);">Slower initial load</span></li><li><span style="color: rgb(0,0,128);">Unpredictable performance – you never know if your user will open and ‘compile’ your website on a mobile device with a very slow internet connection or not updated browser</span></li><li><span style="color: rgb(0,0,128);">Client-side routing solutions can delay web crawling.</span></li><li><span style="color: rgb(0,0,128);">SEO – if you not implemented correctly</span></li><li><span style="color: rgb(0,0,128);">Initial req loads the page, CSS, layout, js,</span></li><li><span style="color: rgb(0,0,128);">Some or all content is not included</span></li><li><span style="color: rgb(0,0,128);">Higher memory consumtion</span></li></ul></td>
          <td><ul style="text-align: left;"><li><span style="color: rgb(0,0,128);">TTFB (Time to first byte) is slower; your server has to spend some time to prepare HTML for your page instead of sending almost empty HTML doc with link to javascript</span></li><li><span style="color: rgb(0,0,128);">The server will be busier, can execute fewer request per second</span></li><li><span style="color: rgb(0,0,128);">HTML doc will be bigger</span></li><li><span style="color: rgb(0,0,128);">The page is viewable sooner, but it’s not interactive and the beginning, a user has to wait until react will be done executing</span></li><li><span style="color: rgb(0,0,128);">Full page reload after routes change</span></li><li><span style="color: rgb(0,0,128);">Non-rich site interactions</span></li></ul></td>
        </tr>
        <tr>
          <td>Speed</td>
          <td>In client-side-rendering, non-content can be displayed until browser will download all the js files.

      A blank page is much longer on client-side-rendering, as a developer you have to avoid it using some loader, or loading screen

      On the other hand, CSR responds faster when loading subsequent web pages</td>
          <td>In server-side-rendering user will get HTML rendered much faster than in client-side-rendering (First Contentful Paint). But while the page is rendered earlier and the customer can see the page sooner, they can’t really interact with it until JS is done executing. If the customer is really fast and clicks a button, the action won’t be executed until JS is done executing;</td>
        </tr>
        <tr>
          <td>SEO (Search Engine Optimization)</td>
          <td>CSR isn’t very SEO friendly. It’s primarily because the majority of single-page applications are run on JavaScript, which most search engines do not support. Web pages are indexed through “crawling” or “spidering”. Search engine crawlers download the page’s HTML files which makes static HTML web-pages are easier to rank. </td>
          <td>SSR enables better website positioning as each page can be optimized for a different keyword. Also, meta tags can be included on every page – this positively impacts Google rankings. </td>
        </tr>
      </table>
    `,
    category: 'web-application-design'
  },
  {
    question: 'Що таке Angular Universal?',
    answer: `

    Angular Universal is a technology that renders Angular applications on the server.

A normal Angular application executes in the browser, rendering pages in the DOM in response to user actions. Angular Universal executes on the server, generating static application pages that later get bootstrapped on the client. This means that the application generally renders more quickly, giving users a chance to view the application layout before it becomes fully interactive.`,
    category: 'web-application-design'
  },
  {
    question: 'Чому при роботі з SSR ми можемо юзати менше різних бібліотек ніж при роботі з CSR?',
    answer: `Бо багато бібліотек працюють з DOMом і в SSR ми такої можливості не маємо`,
    category: 'web-application-design'
  },
  {
    question: 'Які є варіанти комбінації SPA i MPA?',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Що таке HTML streaming? (Більше до реакту, не обовязково)',
    answer: `
    HTML streaming dynamically caches parts of the HTML document without touching the <body> section that may have personalized elements and other factors which make it difficult to cache. This means visitors see the page is beginning to load in their browser very quickly even as Section is fetching the remainder of the HTML document from your origin server.

HTML streaming works by combining the power of Varnish Cache and Lua to cache the <head> of the HTML document while dynamically pulling in the rest of the content through edge side includes. This allows for quick speed wins without the need to make AJAX calls or code changes.

For Magento 1.x users who want to leverage the speed of Varnish Cache without using the more complex Turpentine extension, HTML streaming is a great way to realize immediate speed wins with a quick implementation.
    `,
    category: 'web-application-design'
  },
  {
    question: 'Що таке micro-fronted? Pros and Cons',
    answer: `
      <div class="markdown-body">
      Micro frontend is an architectural and organizational style (NOT a specific technology!!!) in which the front-end of the app is decomposed into individual, loosely coupled “micro apps” that can be built, tested, and deployed independently. Just like in the world of microservices where the backend is chopped into individual services.

Simply put, each micro frontend is just code for a fragment — a separate feature — of the web page. These features are owned by independent teams, each having a distinct business area or mission it specialized in.
                <h1><a id="user-content-micro-frontends" class="anchor" aria-hidden="true" href="#micro-frontends"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Micro-frontends</h1>
        <h2><a id="user-content-pros-and-cons" class="anchor" aria-hidden="true" href="#pros-and-cons"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Pros and Cons</h2>
        <p>Pros</p>
        <ul>
        <li>Smaller, more cohesive, and maintainable codebases</li>
        <li>More scalable organizations with decoupled, autonomous teams</li>
        <li>Incremental upgrades</li>
        <li>Independent deployment</li>
        </ul>
        <p>Cons</p>
        <ul>
        <li>Payload size: Some implementations can lead to duplication of dependencies, increasing the number of bytes our users must download</li>
        <li>Environment differences: The dramatic increase in team autonomy can cause fragmentation in the way your teams work</li>
        <li>Operational and governance complexity</li>
        </ul>
        <h2><a id="user-content-integrations" class="anchor" aria-hidden="true" href="#integrations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Integrations</h2>
        <h3><a id="user-content-build-time-integration" class="anchor" aria-hidden="true" href="#build-time-integration"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Build-time integration</h3>
        <p>One approach is to publish each micro frontend as a package and have the container application include them all as library dependencies.</p>
        <p>This approach means that we have to re-compile and release every single micro frontend in order to release a change to any individual part of the product.</p>
        <h3><a id="user-content-run-time-integration-via-iframes" class="anchor" aria-hidden="true" href="#run-time-integration-via-iframes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Run-time integration via iframes</h3>
        <p>One of the simplest approaches to composing applications together in the browser is the humble iframe.</p>
        <p>By their nature, iframes make it easy to build a page out of independent sub-pages. They also offer a good degree of isolation in terms of styling and global variables not interfering with each other.</p>
        <p>It can be difficult to build integrations between different parts of the application, so they make routing, history, and deep-linking more complicated, and they present some extra challenges to make your page fully responsive.</p>
        <h3><a id="user-content-run-time-integration-via-javascript" class="anchor" aria-hidden="true" href="#run-time-integration-via-javascript"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Run-time integration via JavaScript</h3>
        <p>Each micro frontend is included on the page using a <code>&lt;script&gt;</code> tag, and upon load exposes a global function as its entry-point. The container application then determines which micro frontend should be mounted, and calls the relevant function to tell a micro frontend when and where to render itself.</p>
        <p>Unlike with build-time integration, we can deploy each of the bundle.js files independently. And unlike with iframes, we have full flexibility to build integrations between our micro frontends however we like.</p>
        <h2><a id="user-content-common-for-all-parts-things" class="anchor" aria-hidden="true" href="#common-for-all-parts-things"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Common for all parts things</h2>
        <h3><a id="user-content-styling" class="anchor" aria-hidden="true" href="#styling"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Styling</h3>
        <p>BEM, pre-processor, CSS modules, CSS-in-JS.
        Use any approach to avoid collisions.</p>
        <h3><a id="user-content-shared-component-libraries" class="anchor" aria-hidden="true" href="#shared-component-libraries"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Shared component libraries</h3>
        <p>Let the teams create their own components and after a while, some of them could be moved to the library.
        Keep there dumb components only with a UI (not business) logic. There should be someone dedicated to take care of the library.</p>
        <h3><a id="user-content-cross-application-communication" class="anchor" aria-hidden="true" href="#cross-application-communication"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Cross-application communication</h3>
        <p>It's better to have them communicate as little as possible. You may do it these ways:</p>
        <ol>
        <li>Custom events allow micro frontends to communicate indirectly.</li>
        <li>The React model of passing callbacks and data from the container application to the micro frontends.</li>
        <li>Use the address bar as a communication mechanism.</li>
        </ol>
        <p>Avoid having any shared state.</p>
        <p>You could implement some form of consumer-driven contracts so that each micro frontend can specify what it requires from other micro frontends.</p>
        <h3><a id="user-content-backend-communication" class="anchor" aria-hidden="true" href="#backend-communication"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Backend communication</h3>
        <p>One pattern that helps here is the BFF pattern, where each frontend application has a corresponding backend whose purpose is solely to serve the needs of that frontend.</p>
        <p>The guiding principle here is that the team building a particular micro frontend shouldn't have to wait for other teams to build things for them. So if every new feature added to a micro frontend also requires backend changes, that's a strong case for a BFF, owned by the same team.</p>
        <h3><a id="user-content-testing" class="anchor" aria-hidden="true" href="#testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Testing</h3>
        <p>The obvious peculiarity is an integration testing of the various micro-frontends with the container application.</p>
        <p>Use unit tests to cover low-level business logic and rendering logic, and functional/end-to-end tests just to validate that the page is assembled correctly.</p>

              </div>
    `,
    category: 'web-application-design'
  },
  {
    question: 'Whats monorep? Pros and Cons',
    answer: `
      <div class="markdown-body">
                <h1><a id="user-content-monorepos" class="anchor" aria-hidden="true" href="#monorepos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Monorepos</h1>
      <p>Imagine that instead of a small app, you need to maintain a huge platform consisting of a lot of functional areas. If you are thinking about architecture, you will want to do two main things: Separate concerns and avoid code dupes.</p>
      <h2><a id="user-content-monorepo-advantages" class="anchor" aria-hidden="true" href="#monorepo-advantages"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Monorepo Advantages</h2>
      <ul>
      <li>One place to store all configs and tests.</li>
      <li>Easily refactor global features with atomic commits.</li>
      <li>Simplified package publishing.</li>
      <li>Easier dependency management.</li>
      <li>Re-use code with shared packages while still keeping them isolated.</li>
      </ul>
      <h2><a id="user-content-monorepo-disadvantages" class="anchor" aria-hidden="true" href="#monorepo-disadvantages"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Monorepo Disadvantages</h2>
      <ul>
      <li>
      <p>No way to restrict access only to some parts of the app.</p>
      </li>
      <li>
      <p>Poor Git performance when working on large-scale projects</p>
      <p><strong>Note</strong>: Nowadays, Facebook tries to resolve issues with VCS scalability by patching Mercurial and, probably soon, this won’t be such a big issue.</p>
      </li>
      <li>
      <p>Higher build time.</p>
      </li>
      </ul>
              </div>
    `,
    category: 'web-application-design'
  },
  {
    question: 'Що таке PWA?',
    answer: `A progressive web app (PWA) is the set of mobile web application development techniques that entails building apps that feel and look like native ones. Using a web stack (JS, HTML, and CSS), progressive web apps combine a rich functionality and smooth user experience associated with native apps. Simply put, PWA is the web app with the native-app flavor: After the installation, a user clicks on its icon on a device home screen and gets straight to the website.

      The approach was introduced by Google in 2015, and since then has become a hot topic among engineers thanks to relatively simple development and effective user engagement.

      <br>  <br>
      <div class="markdown-body">
                      <h1><a id="user-content-progressive-web-apps" class="anchor" aria-hidden="true" href="#progressive-web-apps"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Progressive Web Apps</h1>
      <p>PWA is the web app with the native-app flavor: After the installation, a user clicks on its icon on a device home screen and gets straight to the website.</p>
      <ul>
      <li>The Web App manifest (JSON file)</li>
      <li><a href="Workers">Service Worker</a></li>
      </ul>
      <h2><a id="user-content-features" class="anchor" aria-hidden="true" href="#features"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Features</h2>
      <ul>
      <li>Full responsiveness and browser compatibility.</li>
      <li>Connectivity independence (off-line mode).</li>
      <li>Native app-like interface.</li>
      <li>Push notifications.</li>
      <li>Background synchronization.</li>
      <li>Self-updates.</li>
      <li>Safety (HTTPS).</li>
      <li>Discoverability and easy installation.</li>
      </ul>
      <h2><a id="user-content-cons" class="anchor" aria-hidden="true" href="#cons"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Cons</h2>
      <ul>
      <li>Limited functionality and increased battery use compared to native apps</li>
      <li>Search traffic losses due to no presence on app stores</li>
      </ul>
      <h2><a id="user-content-examples" class="anchor" aria-hidden="true" href="#examples"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Examples</h2>
      <ul>
      <li>The Washington Post</li>
      <li>Shopify</li>
      <li>Twitter</li>
      </ul>
      <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
      <p>-<a href="https://www.altexsoft.com/blog/engineering/progressive-web-apps/" rel="nofollow">Progressive Web Apps: Core Features, Architecture, Pros and Cons</a></p>

                    </div>

`,
    category: 'web-application-design'
  },
  {
    question: 'Стрімінг обсервабли в ангулярі щоб пінганути юзера що нада апку обновити (pwa)',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Чи будуть проблеми з сервіс воркерами в PWA?',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Які тули знаєте для менежнення моно реп?',
    answer: `<ul>
    <li>
    <strong>Basel</strong> is Google’s monorepo-oriented build system.</li>
    <li>
    <strong>Yarn</strong> is a JavaScript dependency management tool that supports monorepos through workspaces.</li>
    <li>
    <strong>Lerna</strong> is a tool for managing JavaScript projects with multiple packages, built on Yarn. Lerna is focused on linking multiple packages from the same project and managing npm publishing.</li>
    <li>
    <strong>Nx</strong> is an extensible dev tool for monorepos. It's focused on managing development workflow for multiple packages. Nx doesn't rebuild and retest everything on every commit - it only rebuilds what is necessary.</li>
    </ul>`,
    category: 'web-application-design'
  },
  {
    question: 'Як вибрати фреймворк для проекту?\n',
    answer: `
    <div data-view-component="true" class="Layout-main">          <div id="wiki-body" class="gollum-markdown-content">
    <div class="markdown-body">
      <h1><a id="user-content-holy-war-choice-of-framework" class="anchor" aria-hidden="true" href="#holy-war-choice-of-framework"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Holy War: Choice of Framework</h1>
      <p>Consider next:</p>
      <ul>
      <li>community, GitHub stars, repos, forks, components</li>
      <li>documentation</li>
      <li>support, new versions</li>
      <li>popularity trends (npm, google, StackOverflow)</li>
      <li>learning curve</li>
      <li>features out of the box</li>
      <li>extending with new features</li>
      <li>scalable for big teams</li>
      <li>versions backward compatibility</li>
      <li>native/mobile apps support?</li>
      <li>bundle size</li>
      <li>flexible/opinionated in project structure/configuration</li>
      <li>ease of integration to existing apps (micro-frontends friendliness)</li>
      <li>production case studies</li>
      <li>team background/level of knowledge</li>
      <li>SSR support</li>
      </ul>
                    </div>
                </div>
      </div>

      <br><br>
      <img src="https://content.altexsoft.com/media/2018/05/PWAs_web_native_apps_compared.png.webp" width="600">
    `,
    category: 'web-application-design'
  },
  {
    question: 'CSS methodologies',
    answer: `
    <div class="markdown-body">
                <h1><a id="user-content-css-methodologies" class="anchor" aria-hidden="true" href="#css-methodologies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>CSS methodologies</h1>
    <p>The most popular ones</p>
    <ul>
    <li>
    <strong>Atomic CSS</strong> - One Rule for One Styling</li>
    <li>
    <strong>BEM</strong> - component-based approach, any component level class is a <code>block</code>, any its part is an <code>element</code>, the state of both block or element could be described with <code>modifier</code>
    </li>
    <li>
    <strong>ITCSS</strong> - Inverted Triangle CSS divides CSS structure into sections going up-down from more general to more specific</li>
    <li>
    <strong>SMACSS</strong> - separate our classes into groups <code>Base rules</code>, <code>Layout rules</code>, <code>Modules</code>, <code>State rules</code>, <code>Theme rules</code>, name and structure them accordingly</li>
    <li>
    <strong>OOCSS</strong> - introduces wide code reuse with extracting repeating CSS patterns as default classes</li>
    </ul>
    <p>They can be used in combination together as well as independently. Take the best of each approach.</p>
    <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
    <ul>
    <li><a href="https://www.valoremreply.com/post/5_css_methodologies/" rel="nofollow">5 Methodologies for Architecting CSS</a></li>
    <li><a href="https://2020.stateofcss.com/en-US/technologies/methodologies/" rel="nofollow">CSS Methodologies (stateofcss)</a></li>
    </ul>

              </div>

    `,
    category: 'web-application-design'
  },
  {
    question: 'CSS methodology - BEM',
    answer: `

    `,
    category: 'web-application-design'
  },
  {
    question: 'How does BEM work with Angular?',
    answer: `Якщо ми юзаємо view encapsulation - то ні. Якщо ні - то можна. БЕМ не варто юзати з ангуляром, бо то пережиток минулого)))))`,
    category: 'web-application-design'
  },
  {
    question: 'CSS modules',
    answer: `
      Approach to write CSS that will isolated and related only to the module where it was used.
    `,
    category: 'web-application-design'
  },
  {
    question: 'CSS in JS',
    answer: `
      Approach to write styles in JS files. As an example: Styled components in React.
    `,
    category: 'web-application-design'
  },
  {
    question: 'OOCSS',
    answer: ``,
    category: 'web-application-design'
  },
  {
    question: 'Atomic css',
    answer: `
      One style rules for some particular entity. For example: 'button button-xs'. This approach is used in Bootstrap.
    `,
    category: 'web-application-design'
  },
]
