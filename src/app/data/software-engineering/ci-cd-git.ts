export const ciCdGitCards = [
  {
    question: 'Як в мене на проекті налаштований CI/CD?\n',
    answer: ``,
    category: 'ci-cd-git'
  },
  {
    question: 'Що таке СІ? Що туди входить?',
    answer: `
    <div class="markdown-body">
                <h1><a id="user-content-cicd-and-cd" class="anchor" aria-hidden="true" href="#cicd-and-cd"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>CI/CD and CD</h1>
<h2><a id="user-content-continuous-integration-ci" class="anchor" aria-hidden="true" href="#continuous-integration-ci"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Continuous integration (CI)</h2>
<p>Developers practicing continuous integration merge their changes back to the main branch as often as possible. The developer's changes are validated by creating a build and running automated tests against the build.</p>
<h3><a id="user-content-what-you-need" class="anchor" aria-hidden="true" href="#what-you-need"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>What you need</h3>
<ul>
<li>Your team will need to write automated tests for each new feature, improvement or bug fix.</li>
<li>You need a continuous integration server that can monitor the main repository and run the tests automatically for every new commits pushed.</li>
<li>Developers need to merge their changes as often as possible, at least once a day.</li>
</ul>

<img src="ci-cd-cd-and-git/images/ci-cd.png" width="600px">

              </div>`,
    category: 'ci-cd-git'
  },
  {
    question: 'Що таке СD CD? Що туди входить?',
    answer: `
    <img width="600" src="https://wac-cdn.atlassian.com/dam/jcr:b2a6d1a7-1a60-4c77-aa30-f3eb675d6ad6/ci%20cd%20asset%20updates%20.007.png?cdnVersion=629">
    `,
    category: 'ci-cd-git'
  },
  {
    question: 'CI CD CD - Pros and Cons',
    answer: ``,
    category: 'ci-cd-git'
  },
  {
    question: 'Як на вашу думку має проходити CI CD CD процес? Чому його нема на ашому проекті?',
    answer: ``,
    category: 'ci-cd-git'
  },
  {
    question: 'Що таке pre-hooks? Як налаштувати?',
    answer: `
    Git hooks are scripts that run automatically every time a particular event occurs in a Git repository. They let you customize Git’s internal behavior and trigger customizable actions at key points in the development life cycle.`,
    category: 'ci-cd-git'
  },
  {
    question: 'Що таке коміт-стилі? ',
    answer: ``,
    category: 'ci-cd-git'
  },
  {
    question: 'Які є branching-strategy? ',
    answer: `
    Git Flow, feature branching strategy, forking,
    `,
    category: 'ci-cd-git'
  },
  {
    question: 'git-flow. Proc cons. is good for',
    answer: `It assigns very specific roles to different branches and defines how and when they should interact. In addition to feature branches, it uses individual branches for preparing, maintaining, and recording releases.

It contains Feature Branch flow.

`,
    category: 'ci-cd-git'
  },
  {
    question: 'feature. Proc cons. is good for',
    answer: `
    The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the main branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase.
    <br>
    The Git Feature Branch Workflow is a composable workflow that can be leveraged by other high-level Git workflows.
    <br>
    <img src="https://github.com/alexanderteplov/computer-science/wiki/ci-cd-cd-and-git/images/FeatureBranch_flow.svg" width="600px">
        `,
    category: 'ci-cd-git'
  },
  {
    question: 'forking. Proc cons. is good for',
    answer: `
    The Forking Workflow is fundamentally different than other popular Git workflows. Instead of using a single server-side repository to act as the “central” codebase, it gives every developer their own server-side repository. The Forking Workflow is most often seen in public open source projects.
    <ol>
    <li>A developer 'forks' an 'official' server-side repository. This creates their own server-side copy.</li>
    <li>The new server-side copy is cloned to their local system.</li>
    <li>A Git remote path for the 'official' repository is added to the local clone.</li>
    <li>A new local feature branch is created.</li>
    <li>The developer makes changes on the new branch.</li>
    <li>New commits are created for the changes.</li>
    <li>The branch gets pushed to the developer's own server-side copy.</li>
    <li>The developer opens a pull request from the new branch to the 'official' repository.</li>
    <li>The pull request gets approved for merge and is merged into the original server-side repository</li>
    </ol>
    `,
    category: 'ci-cd-git'
  },
  {
    question: 'centralized. Proc cons. is good for',
    answer: `Однабренча і всі лиють в неї`,
    category: 'ci-cd-git'
  },
  {
    question: 'Whats squash. В якій бренчинг стратегії юзається',
    answer: `To "squash" in Git means to combine multiple commits into one. You can do this at any point in time (by using Git's "Interactive Rebase" feature), though it is most often done when merging branches. Please note that there is no such thing as a stand-alone git squash command.`,
    category: 'ci-cd-git'
  },
  {
    question: 'git hub strategy ',
    answer: `
    In reaction to Git flow a simpler alternative was detailed, called GitHub flow. This flow has only feature branches and a master branch. Anything in the master branch is deployable, so to work on something new, create a descriptively named branch. When it's ready, you create a merge or pull request. After someone else has reviewed and signed off on the feature, it deployed, got feedback, and merged into master.

It contains Feature Branch flow.

<img src="https://github.com/alexanderteplov/computer-science/wiki/ci-cd-cd-and-git/images/GitHub_flow.svg" width="600px">`,
    category: 'ci-cd-git'
  },
  {
    question: 'git lab strategy ',
    answer: `
    The GitLab flow suggests creating environment branches like staging and production. When someone wants to deploy to staging they create a merge request from the master branch to the pre-production branch. And going live with code happens by merging the staging branch into the production branch. This workflow, where commits only flow downstream, ensures that everything has been tested on all environments.

    <img src="https://github.com/alexanderteplov/computer-science/wiki/ci-cd-cd-and-git/images/GitLab_flow.svg" width="500px">`,
    category: 'ci-cd-git'
  },
  {
    question: 'Коли як і де і які варто юзаит бренчінг стратегiї',
    answer: ``,
    category: 'ci-cd-git'
  },
  {
    question: 'Як впливає розмір і мечуріті команди на вибір бренчінг стратегії?',
    answer: ``,
    category: 'ci-cd-git'
  },
  {
    question: 'Які є release(деплоімент) стратегії?',
    answer: `
    <div class="markdown-body">
                <h1><a id="user-content-release-strategies" class="anchor" aria-hidden="true" href="#release-strategies"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Release strategies</h1>
      <h2><a id="user-content-big-bang-deployment" class="anchor" aria-hidden="true" href="#big-bang-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Big-bang deployment</h2>
      <p>All new system is deployed at once immediately replacing the old system. Challengeable for the testing team and hard to rollback.</p>
      <h2><a id="user-content-ring-deployment" class="anchor" aria-hidden="true" href="#ring-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Ring deployment</h2>
      <p>Deployment occurs in several stages, starting from the small group of users, e.g. the developers team (the smallest ring), the next ring is wider, e.g. beta society, and so on till all the users would be involved.</p>
      <p>Allows to fix bugs on earlier stages affecting less users.</p>
      <p>Easily combined with other strategies.</p>
      <h2><a id="user-content-rolling-deployment" class="anchor" aria-hidden="true" href="#rolling-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Rolling deployment</h2>
      <p>Rolling, step, or phased deployments. In a rolling deployment, an application’s new version gradually replaces the old one.</p>
      <img src="ci-cd-cd-and-git/images/rolling.png" width="600px">
      <h2><a id="user-content-blue-green-deployment" class="anchor" aria-hidden="true" href="#blue-green-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Blue-green deployment</h2>
      <p>Also Red-Black or A/B Deployment. In this method, two identical production environments work in parallel. Once the new version has been deployed to the one of the production environments we switch the router/balancer to it.</p>
      <img src="ci-cd-cd-and-git/images/blue-green.png" width="600px">
      <h2><a id="user-content-canary-deployment" class="anchor" aria-hidden="true" href="#canary-deployment"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Canary deployment</h2>
      <p>It's combined blue-green and phased (rolling) deployments. We deploy the new application on small part of the infrastructure and route a small group of users to it.</p>
      <img src="ci-cd-cd-and-git/images/canary.png" width="600px">
      <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
      <ul>
      <li><a href="https://dev.to/mostlyjason/intro-to-deployment-strategies-blue-green-canary-and-more-3a3" rel="nofollow">Intro to deployment strategies: blue-green, canary, and more</a></li>
      </ul>
              </div>
    `,
    category: 'ci-cd-git'
  },
]
