export const performanceOptimizationsCards = [
  {
    question: 'Critical Rendering Path',
    answer: `How does the browser rendering engine work?<br><br>
    In order to render content the browser has to go through a series of steps:<br>
    <ol>
      <li><b>Document Object Model(DOM)</b>
      To process a html file and get to the document object model event(DOM) the browser has to go through 4 steps:
      <br>
        1. Convert bytes to characters<br>
        2. Identify tokens<br>
        3. Convert tokens to nodes<br>
        4. Build DOM Tree
      </li>
      <li><b>CSS object model(CSSOM)</b>
      Just as with HTML, the CSS rules need to be converted into something that the browser understands, so these rules go through the same steps as the document object model.
        <br>
        1. Convert bytes to characters <br>
        2. Identify tokens<br>
        3. Convert tokens to nodes<br>
        4. Build CSSOM<br>
        CSS is one of the most important elements of the critical rendering path, because the browser blocks page rendering until it receives and processes all the css files in your page, CSS is render blocking
      </li>
      <li><b>Render Tree</b>
        This stage is where the browser combines the DOM and CSSOM, this process outputs a final render tree, which contains both the content and the style information of all the visible content on the screen.
      <br>
      </li>
      <li><b>Layout</b>
        This stage is where the browser calculates the size and position of each visible element on the page, every time an update to the render tree is made, or the size of the viewport changes, the browser has to run layout again.
      </li>
      <li><b>Paint</b>
        When we get to the paint stage, the browser has to pick up the layout result, and paint the pixels to the screen, beware in this stage that not all styles have the same paint times, also combinations of styles can have a greater paint time than the sum of their parts. For an instance mixing a border-radius with a box-shadow, can triple the paint time of an element instead of using just one of the latter.
      </li>
    </ol>

    <img width="600" height="158" src="https://miro.medium.com/max/875/1*gouuTGXzSY2lDn_CS2cAfw.png">

    <br>
    There are only two cases when Javascript does not block on CSSOM:<br>
        1. Inlined scripts above the css files ‘<link>’ in the ‘<head>’;<br>
        2. Async scripts. <br>`,
    category: 'performance-optimization'
  },
  {
    question: 'Чи можемо ми спочатку загрузити джс, потім стилі. тобто чи ми зможемо змінити процес Critical Rendering path?',
    answer: ``,
    category: 'performance-optimization'
  },
  {
    question: 'Що в head tag можна включити?',
    answer: `Аналалітики, якісь гугл аналітики, щоб перформенс трекати, стилі, шрифти, джаваскрипт`,
    category: 'performance-optimization'
  },
  {
    question: 'Які атрибути ми можемо поставити щоб грузити js і не стопати браузер від рендеру?',
    answer: `Async i defer`,
    category: 'performance-optimization'
  },
  {
    question: 'Async &/vs Defer',
    answer: `В обох грузиться синхронно. Дефер зберігає послідовність виконання. З асинком, який найшвидше загрузиться, той і буде
    <br>
    Both async and defer have one common thing: downloading of such scripts doesn’t block page rendering. So the user can read page content and get acquainted with the page immediately.

    But there are also essential differences between them: <br>
    <table border="1" cellpadding="1" cellspacing="1" role="table">
    <thead>
    <tr>
    <th scope="col"></th>
    <th scope="col">Order</th>
    <th scope="col"><code>DOMContentLoaded</code></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td><code>async</code></td>
    <td><em>Load-first order</em>. Their document order doesn’t matter – which loads first runs first</td>
    <td>Irrelevant. May load and execute while the document has not yet been fully downloaded. That happens if scripts are small or cached, and the document is long enough.</td>
    </tr>
    <tr>
    <td><code>defer</code></td>
    <td><em>Document order</em> (as they go in the document).</td>
    <td>Execute after the document is loaded and parsed (they wait if needed), right before <code>DOMContentLoaded</code>.</td>
    </tr>
    </tbody>
    </table>
    <br>
    In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important.

    And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.

    <br>
    <ul>
    <li><strong>Normal execution </strong><em><span style="color: #888888;">&lt;script&gt;</span></em><br>
    This is the default behavior of the &lt;script&gt; element. Parsing of the HTML code pauses while the script is executing. For slow servers and heavy scripts this means that displaying the webpage will be delayed.<strong></strong></li>
    <li><strong>Deferred execution </strong><em><span style="color: #888888;">&lt;script defer&gt;</span></em><br>
    Simply put: delaying script execution until the HTML parser has finished. A positive effect of this attribute is that the DOM will be available for your script. However, since not every browser supports defer yet, don’t rely on it!</li>
    <li><strong>Asynchronous execution </strong><em><span style="color: #888888;">&lt;script async&gt;</span></em><br>
    Don’t care when the script will be available? Asynchronous is the best of both worlds: HTML parsing may continue and the script will be executed as soon as it’s ready. I’d recommend this for scripts such as Google Analytics.</li>
    </ul>`,
    category: 'performance-optimization'
  },
  {
    question: 'Repaint & Reflow processes',
    answer: `C changing the input information which was used to construct the render tree may result in one or both of these:
    <ol>
        <li>parts of the render tree (or the whole tree) will need to be revalidated and the node dimensions recalculated. This is called a reflow, or layout, or layouting. Note that there’s at least one reflow — the initial layout of the page</li>
      <li>parts of the screen will need to be updated, either because of changes in geometric properties of a node or because of stylistic change, such as changing the background color. This screen update is called a repaint, or a redraw.

      </li>
      </ol>

        <br>
    Repaints and reflows can be expensive, they can hurt the user experience, and make the UI appear sluggish
    <br><br>
    <b>Repaint</b><br>
    As the name suggests repaint is nothing but the repainting element on the screen as the skin of element change which affects the visibility of an element but do not affects layout.
    Example.<br>
    1. Changing visibility of an element.<br>
    2. Changing an outline of the element.<br>
    3. Changing background.<br>
    Would trigger a repaint.
    <br><br>
    <b>Reflow </b><br>
    Reflow means re-calculating the positions and geometries of elements in the document, for the purpose of re-rendering part or all of the document. Because reflow is a user-blocking operation in the browser, it is useful for developers to understand how to improve reflow time and also to understand the effects of various document properties (DOM depth, CSS rule efficiency, different types of style changes) on reflow time. Sometimes reflowing a single element in the document may require reflowing its parent elements and also any elements which follow it.`,
    category: 'performance-optimization'
  },
  {
    question: 'Застереження (warning?) до Repaint & Reflow',
    answer: ``,
    category: 'performance-optimization'
  },
  {
    question: 'Layout trashing',
    answer: `Layout thrashing occurs when we perform a series of consecutive reads and writes to DOM, in the process not allowing the browser to perform layout optimizations. Changing attributes of one element or modifying its content doesn't affect only that element; instead, it can cause a cascade of changes`,
    category: 'performance-optimization'
  },
  {
    question: 'Чи Reflow буде зачіпати всі елементи на сторінці чи не?',
    answer: `Так, буде зачіпати всі елементи, крім тих випадків коли елементи знаходяться  в іншому layer. (position: fixed or absolute. чи transform)`,
    category: 'performance-optimization'
  },
  {
    question: 'Які є способи анімувати контент на сторінці',
    answer: `
      <ol>
      <li>
      <strong>JavaScript</strong>
      <ol>
      <li>Use <code>requestAnimationFrame()</code> to control animations</li>
      <li>Use <code>requestIdleCallback()</code> to serve background work without impacting latency-critical events as animation and input response</li>
      </ol>
      </li>
      <li>
      <strong>CSS</strong>
      <ol>
      <li>Animate only CSS properties that don't trigger layout:
      <ul>
      <li><code>transform: translate()</code></li>
      <li><code>transform: rotate()</code></li>
      <li><code>transform: scale()</code></li>
      <li><code>opacity</code></li>
      </ul>
      </li>
      <li>For reasonable optimization use <code>will-change</code>
      </li>
      </ol>
      </li>
      <li>
      <strong>Web Animations API</strong>
      <ol>
      <li>It is one of the most performant ways to animate on the Web</li>
      </ol>
      </li>
      </ol>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Whats Request Animation Frame',
    answer: `requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.`,
    category: 'performance-optimization'
  },
  {
    question: 'Відмінність від absolute (top/ left) i transform?',
    answer: `transform дьоргає репейнт
      <br>Абсолют і репейнт і рефлов`,
    category: 'performance-optimization'
  },
  {
    question: 'will-change css property ',
    answer: `The will-change CSS property hints to browsers how an element is expected to change. Browsers may set up optimizations before an element is actually changed. These kinds of optimizations can increase the responsiveness of a page by doing potentially expensive work before they are actually required.`,
    category: 'performance-optimization'
  },
  {
    question: 'RAIL model',
    answer: `RAIL is a user-centric performance model that provides a structure for thinking about performance. The model breaks down the user's experience into key actions (for example, tap, scroll, load) and helps you define performance goals for each of them.
   <ul><li>Response time reflects how rapidly your website reacts to inputs. A response time under 100 ms feels immediate; <strong>anything slower is noticeable to the user</strong>.</li><li>Animation speed applies to any visual animations you have on the page as well as user scrolling and dragging. The ideal goal is <strong>60 FPS</strong>, or one frame every 16 ms.</li><li>Idle work refers to what is happening in the background of your website after it initially loads. Idle work should be divided into <strong>50 ms blocks</strong> so that it doesn't drag down response time.</li><li>Load, in the context of the RAIL model, means the first meaningful paint, which should appear <strong>less than one second after the user requests your page</strong>.</li></ul>
    <br><br>More detailed: <br>
    1. Respond to user inputs within 50 ms#<br>
    The Google Developer's Guide recommends providing some form of feedback for any user action that takes longer than 50 ms. That may sound like overkill, but aiming for such a goal ensures that the link between action and response always feels instantaneous to the user.
    <br>
    Let's say you have a button on your website that generates a random image on the page. If it takes 100 ms for the image to appear, then you should include something to let the user know that their input was received. For example, the button could change colors, or a placeholder graphic could appear while the image finishes loading.
    <br>
    2. Produce animation frames in 10 ms#<br>
    Loading indicators, scrolling, dragging and zooming are all considered animations under the RAIL model. If you're trying to achieve 60 FPS, then your budget per frame is theoretically 16 ms; however, browsers typically need about 6 ms just to render a frame, which is why you should shoot for 10 ms or less. Users can detect the slightest variations, so the animation speed must be consistent to maintain a sense of visual seamlessness.
    <br>
    3. Make the most of idle time#<br>
    To improve your chances of always achieving a 50 ms response time, you should make good use of idle time. Try loading only the most critical elements of your page during the initial page load, and then load everything else when the user is idle. That said, you must make sure that work performed during idle time doesn't interfere with responsiveness since that would defeat your purpose. Give user interactions the highest priority so that they interrupt idle work instead of the other way around.
    <br>
    4. Make your page interactive within five seconds#<br>
    Ideally, users should be able start interacting with your page within five seconds (at most) of requesting your URL for the first time. Based on research conducted by Google, websites that become functional in just five seconds achieve an average of 70 percent longer session lengths, 35 percent lower bounce rates and 25 percent higher ad views compared to slower websites. Furthermore, mobile sites that load within five seconds earn double the ad revenue of slower competitors.
    <br>
    As of 2018, the "five second rule" is a good target for mid-range mobile devices over a 3G connection. For returning visitors, utilize caching to aim for a two second load time. However, keep in mind that as technology continues to evolve, so will people's expectations. It is indeed true that people will keep growing more impatient as the internet gets faster.

    `,
    category: 'performance-optimization'
  },
  {
    question: 'PRPL model',
    answer: `PRPL is an acronym that describes a pattern used to make web pages load and become interactive, faster:
      <ul><li><strong>Preload</strong> the most important resources.</li><li><strong>Render</strong> the initial route as soon as possible.</li><li><strong>Pre-cache</strong> remaining assets.</li><li><strong>Lazy load</strong> other routes and non-critical assets.</li></ul>
    <p><strong>Preload</strong> is a declarative fetch request that tells the browser to request a resource as soon as possible. Preload critical resources by adding a <code>&lt;link&gt;</code> tag with <code>rel="preload"</code> to the head of your HTML document</p>
    <p>Extra efforts to render the first page as soon as possible (First Paint) are inlining resources or server-side rendering. The first violates cashing, the second can harm Time to Interactive.</p>
    <p>By acting as a proxy, service workers can fetch assets directly from the cache rather than the server on repeat visits. This not only allows users to use your application when they are offline, but also results in faster page load times on repeat visits.</p>
    <p>Split your code and push/preload or lazy load parts according to their usage.</p>`,
    category: 'performance-optimization'
  },
  {
    question: 'Як ми можемо поміряти перформенс. Чим і як при першій загрузці і при виконанні',
    answer: `
    <h1>Performance measurement and profiling</h1>
    <ul>
    <li>Use <strong>Search Console</strong>'s new Core Web Vitals report to identify groups of pages that require attention (based on the field data).</li>
    <li>Once you've identified pages that need work, use <strong>PageSpeed Insights</strong> (powered by Lighthouse and Chrome UX Report) to diagnose lab and field issues on a page. PageSpeed Insights (PSI) is available via Search Console or you can enter a URL on PSI directly.</li>
    <li>Ready to optimize your site locally in the lab? Use <strong>Lighthouse</strong> and <strong>Chrome DevTools</strong> to measure Core Web Vitals and get actionable guidance on exactly what to fix. The Web Vitals Chrome extension can give you a real-time view of metrics on a desktop.</li>
    </ul>
    <p><strong>Lab tools</strong> provide insight into how a potential user will likely experience your website and offer reproducible results for debugging. <strong>Field tools</strong> provide insight into how your real users are experiencing your website; this type of measurement is often called Real User Monitoring (RUM).</p>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Що таке Lighthouse?',
    answer: `
    <div class="markdown-body">
      <h2><a id="user-content-lighthouse" class="anchor" aria-hidden="true" href="#lighthouse"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Lighthouse</h2>
      <p>Lab tool.</p>
      <p>Lighthouse is an automated website auditing tool that helps developers diagnose issues and identify opportunities to improve the user experience of their sites. It measures several dimensions of user experience quality in a lab environment, including performance and accessibility.</p>
      <p>All of the products that Lighthouse powers are updated to reflect the latest version, including <strong>Lighthouse CI</strong> which enables you to easily measure your Core Web Vitals on pull requests before they're merged and deployed.</p>
      <img src="https://github.com/alexanderteplov/computer-science/wiki/perfomance-optimization/images/lighthouse1.webp" width="600px">
      <img src="https://github.com/alexanderteplov/computer-science/wiki/perfomance-optimization/images/lighthouse2.webp" width="600px">

              </div>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Core Web Vitals',
    answer: `
      <div class="markdown-body">
                <h1><a id="user-content-core-web-vitals-is-an-umbrella-term-for-new-quality-factors-of-the-resource" class="anchor" aria-hidden="true" href="#core-web-vitals-is-an-umbrella-term-for-new-quality-factors-of-the-resource"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Core Web Vitals is an umbrella term for new quality factors of the resource</h1>
      <h2><a id="user-content-lcp--largest-contentful-paint" class="anchor" aria-hidden="true" href="#lcp--largest-contentful-paint"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>LCP — Largest Contentful Paint</h2>
      <p>Determines how quickly the largest and the most important content on the site loads.</p>
      <p>Reports the render time of the largest image or text block visible within the viewport relative to when the page first started loading.</p>
      <p>Sites should strive to have the Largest Contentful Paint of 2.5 seconds or less.</p>
      <h2><a id="user-content-fid--first-input-delay" class="anchor" aria-hidden="true" href="#fid--first-input-delay"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>FID — First Input Delay</h2>
      <p>Determines how quickly a user can start interacting with the site (click, scroll, etc.).</p>
      <p>FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.</p>
      <p>Sites should strive to have a First Input Delay of 100 milliseconds or less.</p>
      <h2><a id="user-content-cls--cumulative-layout-shift" class="anchor" aria-hidden="true" href="#cls--cumulative-layout-shift"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>CLS — Cumulative Layout Shift</h2>
      <p>Determines how much the layout is shifted and if it's stable or not.</p>
      <p>A layout shift occurs any time a visible element changes its position from one rendered frame to the next. CLS is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of a page.</p>
      <p>Sites should strive to have a CLS score of 0.1 or less.</p>


              <img width="600" src="https://web-dev.imgix.net/image/MtjnObpuceYe3ijODN3a79WrxLU2/wk3OTIdxFPoUImDCnjic.png?auto=format&w=964" alt="">
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Оптимізація при роботі з нетворком',
    answer: `<div class="markdown-body">
                <h1><a id="user-content-network-optimizations" class="anchor" aria-hidden="true" href="#network-optimizations"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Network optimizations</h1>
        <p>Network optimizations (images, gzipping, bundling, etc)</p>
        <ul>
        <li>Enable HTTP/2</li>
        <li>Enable TLS 1.3</li>
        <li>Compress responses using Brotli or gzip</li>
        <li>Add caching information</li>
        <li>Optimize JavaScript / CSS files
        <ul>
        <li>Minify JavaScript / CSS files</li>
        <li>Bundle JavaScript / CSS files</li>
        <li>Async / Defer script</li>
        <li>Lazy load CSS</li>
        <li>Inline JavaScript / CSS</li>
        <li>Remove unused CSS rules</li>
        </ul>
        </li>
        <li>Reduce the number of redirections
        <ul>
        <li>Redirect directly to the final destination</li>
        <li>Use canonical instead of a redirection</li>
        <li>Use HSTS (HTTP Strict Transport Security)</li>
        </ul>
        </li>
        <li>Optimize images
        <ul>
        <li>Choose the right format</li>
        <li>Use the right image size</li>
        <li>Use Web Fonts for icons</li>
        <li>Minify FontAwesome</li>
        <li>Lazy load images</li>
        </ul>
        </li>
        <li>Move your servers near your visitors (GeoDNS, CDN)</li>
        <li>Resource Hints: Prefetch resources</li>
        <li>Remove unused resources/features
        <ul>
        <li>Replace social buttons scripts with static links</li>
        </ul>
        </li>
        <li>Minify HTML</li>
        <li>Automate almost everything!</li>
        </ul>
              </div>`,
    category: 'performance-optimization'
  },
  {
    question: 'Runtime performance optimization',
    answer: ``,
    category: 'performance-optimization'
  },
  {
    question: 'Web-workers (Types. Як працюють?)',
    answer: `
        Web workers dont have access to DOM, ні до нетворкінга. Просто ізольовний стрім для важких js калькуляцій)
        + не передавати будь який js код бо сесюріті
        <div class="markdown-body">

      <h2><a id="user-content-web-workers" class="anchor" aria-hidden="true" href="#web-workers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Web workers</h2>
      <p>Web workers can be used to offload pretty much any heavy processing from the main thread. A great example is the image processing web application, Squoosh, which uses web workers to handle image manipulation tasks, leaving the main thread available for the user to interact with the application without interruption.</p>
      <p>You can't directly manipulate the DOM from inside a worker, or use some default methods and properties of the window object. E.g., localStorage, sessionStorage. But you can use a large number of items available under the window, including WebSockets, and data storage mechanisms like IndexedDB.</p>
      <p>Web workers are created using the Web Workers API. After creating a dedicated Javascript file for our worker, we can add it as a new Worker.</p>

      <p>Like all workers, web workers do not have access to the DOM, which means that any information needed will have to be passed between the worker and the main script using window.postMessage().</p>

      <p>In our worker script, we can listen for messages from the main script, and return a response.</p>

      <h2><a id="user-content-service-workers" class="anchor" aria-hidden="true" href="#service-workers"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Service workers</h2>
      <p>Service workers are a type of workers that serve the explicit purpose of being a proxy between the browser and the network and/or cache.</p>
      <p>They are designed to be fully <strong>async</strong>; as a consequence, APIs such as synchronous XHR and Web Storage can't be used inside a service worker.</p>
      <p>Service workers only run over <strong>HTTPS</strong>, for security reasons.</p>
      <p><strong>Cache</strong> represents the storage for Request/Response object pairs that are cached as part of the ServiceWorker life cycle.</p>
      <p>Like web workers, service workers are registered in the main javascript file, referencing a dedicated service worker file</p>

      <p>Unlike regular web workers, service workers have some extra features that allow them to fulfil their proxy purpose. Once they are installed and activated, service workers are able to intercept any network requests made from the main document.</p>

      <p>Once intercepted, a service worker can, for example, respond by returning a document from the cache instead of going to the network, thereby allowing web applications to function offline!</p>
      <h2><a id="user-content-worklets" class="anchor" aria-hidden="true" href="#worklets"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Worklets</h2>
      <p>Worklets are very lightweight, highly specific, workers. They enable us as developers to hook into various parts of the browser’s rendering process.</p>
      <p>The Paint Worklet allows us to create custom images that can be applied anywhere CSS expects an image, for example as a value to the background-image property.</p>
      <p>To create a worklet, as with all workers, we register it in our main javascript file, referencing the dedicated worklet file.</p>

      <p>In our worklet file, we can create a custom image. The paint method works very similarly to the Canvas API. Here’s an example of a simple black-to-white gradient.</p>

      <p>Finally, we can use this new worklet in our CSS, and the custom image we created will be applied like any other background image.</p>

      <p>In addition to the Paint Worklet, there are other worklets that hook into other stages of the rendering process. The Animation Worklet hooks into the Composite stage, and the Layout Worklet hooks in to the Layout stage.</p>
      <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
      <ul>
      <li><a href="https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/" rel="nofollow">Web workers vs Service workers vs Worklets</a></li>
      </ul>

              </div>`,
    category: 'performance-optimization'
  },
  {
    question: 'Memory leaks',
    answer: ` memory leaks can be defined as memory that is not required by an application anymore that for some reason is not returned to the operating system or the pool of free memory. Programming languages favor different ways of managing memory. These ways may reduce the chance of leaking memory. However, whether a certain piece of memory is unused or not is actually an undecidable problem. In other words, only developers can make it clear whether a piece of memory can be returned to the operating system or not.
    <br>
    <ol>
    <li>Accidental global variables</li>
    <li>Forgotten timers or callbacks</li>
    <li>Out of DOM references</li>
    <li>Closures</li>
    <li>Pieces of strings pointed to huge strings, which are considered removed</li>
    </ol>

    <br>How to detect memory leaks? ->
Chrome DevTools Memory tab.

You can see the current usage of memory, make a snapshot, profile memory.`,
    category: 'performance-optimization'
  },
  {
    question: 'Garbage colector. Algorithm. How to run it by ourselves',
    answer: `Trigerrs authomatically by browser. So there is no need to run it by ourselves <br>
    Most garbage collectors use an algorithm known as mark-and-sweep:
    <ol>
    <li>The garbage collector builds a list of "roots". Roots usually are global variables to which a reference is kept in code. In JavaScript, the "window" object is an example of a global variable that can act as a root.</li>
    <li>All roots are inspected and marked as active (i.e. not garbage). All children are inspected recursively as well. Everything that can be reached from a root is not considered garbage.</li>
    <li>All pieces of memory not marked as active can now be considered garbage. The collector can now free that memory and return it to the OS.</li>
    </ol>
    Modern garbage collectors improve on this algorithm in different ways, but the essence is the same: reachable pieces of memory are marked as such and the rest is considered garbage.
    <br>
      Unwanted references are variables kept somewhere in the code that will not be used anymore and point to a piece of memory that could otherwise be freed.
    `,
    category: 'performance-optimization'
  },
  {
    question: 'Event loop',
    answer: `
    <div class="markdown-body">
                      <h1><a id="user-content-event-loop" class="anchor" aria-hidden="true" href="#event-loop"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Event Loop</h1>
      <p><code>Event loop</code> is a thing making all more complicated and more simple at the same time.
      It's an ugly child of a single-threaded language. But like a disabled person can create a beautiful symphony, it orchestrates parallel computations with surprising grace.</p>
      <p>Generally it's a cycle and can be implemented like this:</p>
      <div class="highlight highlight-source-js notranslate position-relative overflow-auto"><pre><span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-c1">true</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
        <span class="pl-s1">gueue</span> <span class="pl-c1">=</span> <span class="pl-en">getNextQueue</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-s1">task</span> <span class="pl-c1">=</span> <span class="pl-s1">queue</span><span class="pl-kos">.</span><span class="pl-en">pop</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-en">execute</span><span class="pl-kos">(</span><span class="pl-s1">task</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

        <span class="pl-k">while</span> <span class="pl-kos">(</span><span class="pl-s1">microtaskQueue</span><span class="pl-kos">.</span><span class="pl-en">hasTasks</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span>
          <span class="pl-en">doMicrotask</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

        <span class="pl-k">if</span> <span class="pl-kos">(</span><span class="pl-en">isRepaintTime</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span>
          <span class="pl-s1">animationTasks</span> <span class="pl-c1">=</span> <span class="pl-s1">animationQueue</span><span class="pl-kos">.</span><span class="pl-en">copyTasks</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
          <span class="pl-k">for</span> <span class="pl-kos">(</span><span class="pl-s1">task</span> <span class="pl-k">in</span> <span class="pl-s1">animationTasks</span><span class="pl-kos">)</span>
            <span class="pl-en">doAnimationsTask</span><span class="pl-kos">(</span><span class="pl-s1">task</span><span class="pl-kos">)</span><span class="pl-kos">;</span>

          <span class="pl-en">repaint</span><span class="pl-kos">(</span><span class="pl-kos">)</span><span class="pl-kos">;</span>
        <span class="pl-kos">}</span>
      <span class="pl-kos">}</span></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
          <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="while (true) {
        gueue = getNextQueue();
        task = queue.pop();
        execute(task);

        while (microtaskQueue.hasTasks())
          doMicrotask();

        if (isRepaintTime()) {
          animationTasks = animationQueue.copyTasks();
          for (task in animationTasks)
            doAnimationsTask(task);

          repaint();
        }
      }" tabindex="0" role="button">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
          <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
      </svg>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
          <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
      </svg>
          </clipboard-copy>
        </div></div>
      <p>Or be represented as in this simplified diagram:</p>
      <img src="https://github.com/alexanderteplov/computer-science/wiki/perfomance-optimization/images/event-loop.png" width="600px">
      <h2><a id="user-content-queues" class="anchor" aria-hidden="true" href="#queues"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Queues</h2>
      <ul>
      <li>
      <strong>Task Queues</strong>. Everything, except microtasks, is a task. There are several task queues with different priorities. Like:
      <ul>
      <li><code>&lt;script&gt;</code></li>
      <li><code>Timers</code></li>
      <li>user input (mouse, keyboard events, etc.)</li>
      <li>any unspecified callbacks</li>
      </ul>
      </li>
      <li>
      <strong>Microtask Queue</strong>. There are only a few things you can do to create a microtask:
      <ul>
      <li>any <code>Promise</code>
      </li>
      <li>
      <code>MutationObserver API</code> callback</li>
      <li><code>queueMicrotask()</code></li>
      </ul>
      </li>
      <li>
      <strong>RequestAnimationFrame task Queue</strong>. It fires at a specific time repeatedly (mostly every 16 ms).</li>
      </ul>
      <h2><a id="user-content-how-it-works" class="anchor" aria-hidden="true" href="#how-it-works"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>How it works</h2>
      <ol>
      <li>First, the browser queues scripts from <code>&lt;script&gt;</code> or <code>&lt;link&gt;</code> tags in the Task queue. Then starts to execute them one by one. Any function it meets during execution is placed into the Call Stack and removed from it after reaching either the return statement or their end.</li>
      <li>Any callback met here, such as <code>setTimeout</code> callback or user input handler, browser queues into an according Task Queue. Any Promise met the browser queues into Microtasks Queue. And call of the <code>requestAnimationFrame</code> - into RequestAnimationFrame task Queue.</li>
      <li>After the Call Stack has been emptied the browser pop one task from a Task Queue. There works a FIFO rule within some particular Task Queue but the browser can choose the next Task Queue in any order. Then, the browser executes a task the same way as with the script above (at 1.). It queues anything needed as in 2.</li>
      <li>If the Microtask Queue is not empty, the browser will empty it executing microtasks one by one, after any finished task.</li>
      <li>The browser idles for a while.</li>
      <li>When some time is reached the browser pop the first <code>requestAnimationFrame</code> callback from its queue, executes as other tasks and then starts the render process.</li>
      </ol>
              </div>
    `,
    category: 'performance-optimization'
  },
  {
    question: 'javascript obfuscation and minification',
    answer: `Minifying your code means reducing its size to make it faster - download faster, parse faster, maybe even run faster.
    <br>
    Obfuscating your code means making it as unreadable as possible, to thwart others from understanding it. Best case scenario, it might be to hide intellectual property.`,
    category: 'performance-optimization'
  },
  {
    question: 'Angular performance Optimization technics',
    answer: `
    <div><div class="ix iy iz ja jb"><h2 id="347c" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">Optimization Techniques</h2><h2 id="7c13" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">1: OnPush change detection strategy</h2><p id="21df" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph=""><strong class="ko tv">Default Change Detection: </strong>Angular detects the changes in the application, within the tree of components. It starts by checking the root component, then its children, then its grand-children, until all components are checked. Then all the necessary DOM updates are applied in one batch.</p><p id="c818" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph=""><strong class="ko tv">OnPush Change Detection</strong>: With the OnPush change detection strategy, we can tell Angular not to check each component, every time the change detection runs.</p><h2 id="1580" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">2: Detach Change Detection/NgZone</h2><p id="57a4" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph=""><mark class="tt tu hv">Every component in an Angular project tree has a change detector which creates a change detection tree.</mark> Whenever some change occurs, these change detectors tell Angular about the change which further updates the DOM accordingly.</p><p id="2eb3" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">This is done by the use of the <strong class="ko tv">ChangeDetectorRef</strong> class. Using this change detection reference instance we can <strong class="ko tv">detach </strong>the change detection from any component where it is not necessary to check for changes with each change detection cycle. We can attach the change detection back anytime we want using the ChangeDetectorRef instance.</p><h2 id="a57c" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">3: Using Pure Pipes</h2><p id="d3df" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">In Angular Pipes are used to format data. Using a pipe is also more performant. There are two types of pipes, pure and impure. By default, a pipe is “<strong class="ko tv">pure</strong>”.</p><h2 id="3860" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">4: AOT Compilation</h2><p id="f7f2" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">JIT compiles your app at <strong class="ko tv">runtime</strong>, and ahead-of-time (AOT) compilation occurs at build time. By default, the development compilation uses the JIT compilation. With <strong class="ko tv">JIT </strong>compilation, the compiler is also part of the bundle, and code is compiled at runtime. This can increase the rendering time of the components.</p><p id="40d5" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph=""><strong class="ko tv">AOT </strong>anticipates compilation at <strong class="ko tv">build time</strong>, produces only the compiled templates, and removes the Angular compiler from the deployment bundle, which reduces your app payload by around 1MB (roughly the size of the Angular compiler) and rendering time is increased significantly.</p><h2 id="5608" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">5: Lazy Loading</h2><p id="4964" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">This is a performance impacting issue and can be solved by <strong class="ko tv">using Lazy Loading</strong>. With lazy loading, we can split our application to feature modules and load them on-demand. The main benefit is that initially, we can only load what the user expects to see at the start screen. The rest of the modules are only loaded when the user navigates to their routes. This improves application load time with a great deal.</p><h2 id="bb10" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">6: Trackby</h2><p id="6d4e" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">Angular user *ngFor structural directive to loop over data and manipulate the DOM by adding and removing DOM elements. However, if not used well, it may damage your app’s performance.</p><h2 id="76ad" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">7: Web Workers</h2><p id="8c38" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">The solution to this is Web Workers. The Web Worker will create a new thread called the <strong class="ko tv"><em class="tw">Worker Thread</em></strong> that will run a JS script parallel to the DOM thread. The JS script run by the Worker thread would not have a reference to the DOM because it is running in a different environment where no DOM APIs exist.</p><h2 id="3649" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">8: Preloading Modules</h2><p id="3b4b" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">We have seen that with lazyloading, we load our featured modules on demand. There may be cases where we don’t want to load a feature module initially but we know that it is a popular module and it will be required soon. Once we’ve pulled down the initial bundle and loaded our application, there’s <strong class="ko tv">no reason to wait </strong>for a user to navigate to that popular feature before starting to load it. So its <strong class="ko tv">better to start loading it in the background</strong>. This is where preloading comes into play.</p><p id="6ce0" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">•Preload everything (PreloadAllModules)</p><p id="9cbc" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">• Don’t preload anything (NoPreloading)</p><p id="93bc" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">You can use one of the two default preloading strategies mentioned above, or you can write your own custom preloading strategy.</p><p id="c039" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">You can specify which preloading strategy you want to use by passing an option into the routing configuration. Preloading can have a positive performance impact.</p><h2 id="15fe" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">9: Resolve Guards</h2><p id="06ed" class="pw-post-body-paragraph km kn je ko b kp kq kr ks kt ku kv kw kx ky kz la lb lc ld le lf lg lh li lj ix ga" data-selectable-paragraph="">We can send the required HTTP call within the <strong class="ko tv">Resolve Guard</strong>, which will load the next component only if the HTTP call returns success. In case of error, it will not load the next component and displays an error on an already loaded component. This can save a lot of DOM rendering and destroying time and increases performance.</p><h2 id="33b3" class="tf tg je bm th ne ti nf nh ni tj nj nl kx tk nm no lb tl np nr lf tm ns nu tn ga" data-selectable-paragraph="">10: Unsubscribe from Observables</h2><p id="0228" class="pw-post-body-paragraph km kn je ko b kp to kr ks kt tp kv kw kx tq kz la lb tr ld le lf ts lh li lj ix ga" data-selectable-paragraph="">Observables have the <strong class="ko tv">subscribe </strong>method which we call with a callback function to get the values emitted. Now, if we subscribe to a stream the stream will be left open and the callback will be called when values are emitted into it anywhere in the app until they are closed by calling the <strong class="ko tv">unsubscribe </strong>method.</p></div></div>

    `,
    category: 'performance-optimization'
  },
];
