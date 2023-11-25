---
title: "How-To: Make website/blog for personal brand"
date: 2023-10-01
updated: 2023-10-01
tags: 
  - How-To
  - Web
  - Personal brand
categories:
  - Tech
description: How and why this website came to be; How you can easily get started as well; What's there to consider and watch out for and how to choose the right software
comments: true
---

<figure markdown>
  ![Blog](how-to-website-blog-personal-brand.webp){: loading=lazy}
  <figcaption>Image by <a href="https://www.freepik.com/">Freepik</a></figcaption>
</figure>

- How and why this website came to be
- How you can easily get started as well
- What's there to consider and watch out for and how to choose the right software

<!--more-->

## Recommended first steps

1. [Choose a Markdown document focussed static site generator](#static-site-generators-ssg) (SSG) or rather template you like best -> easy setup/maintenance, focus on content
1. [Buy domain](#custom-domain-email-ssl) with email account, enable SSL -> professional appearance
1. Register domains in [Google Search Console](https://search.google.com/search-console) (not with private Google account)
1. [Generate privacy policy, imprint, license](#imprint-privacy-policy-cookie-consent) and set up cookie consent
1. Invest in a nice "About" page, maybe with contact form & social media links -> IMO an important part of personal brands is your face, a sympathetic introduction and "approachability"
1. Create [GitHub repo, install SSG](#githubgitlab-pages-static-sites-only), config, deploy via GitHub Pages/Netlify -> free and solid hosting, easy Giscus commenting integration
1. Write your first article to show of your style
1. Also post your first article on Medium + LinkedIn (using canonical link of your post) for increased exposure

## Why build a personal brand via your own site

- **Showcase Expertise**:
    - Articles on your personal site allows you to demonstrate your expertise and knowledge in a specific field or industry. By consistently publishing high-quality, informative content, you can **establish yourself as an authority in your niche**. Regularly sharing valuable insights, experiences, and opinions can help **build trust and credibility** with your audience. 
    - Your personal site can serve as a **dynamic portfolio of your work, achievements, and thought leadership**. This is particularly valuable if you're in a creative or knowledge-heavy profession.
- **Networking**:
    - You can connect with like-minded individuals, experts, and influencers in your field **through comments and offering opportunities to contact you** via email or links to your social media profiles.
- **Narrative Control & Value Association**:
    - Publishing content under your domain, maybe even prominently using your name is a really good method to ensure potential clients/employers etc. **associate your work and the value you create directly and primarily with you or your brand** (vs e.g. your employer or a platform you create value on).
    - Here you also have **full control** over your narrative and can present whatever you want however you want as well as fully **own your content**
- **Monetization**:
    - Though building a solid brand is certainly the more challenging part, having build your brand with your site playing a main role probably makes **monetization via affiliate marketing, sponsored posts, selling digital products, or offering online courses** a lot easier and ensures the brand is further strengthened when those are added to your site.
- **Personal Development**:
    - **Writing requires you to research, write, and continuously learn**. It can be a platform for personal growth and skill development. Through comments and social sharing, you can engage with your audience and **receive feedback on your ideas and content**, which can help you refine your personal brand.

## Tech considerations

### Publishing Frameworks

#### Static site generators (SSG)

- **Typical minimal setup**:
    - Create repo
    - Choose template for your needs (landing page, blog, image portfolio...)
    - Provide config values
    - Publish e.g. via GitHub/GitLab
- **"Static"** premise:
    - **Generate HTML from static documents** (e.g. markdown) and/or via templating/frameworks (e.g. React)
    - As such **don't require a DB or backend** and code-wise **may contain little more than only the website content itself** (almost "no-code")
    - Usually **SSR**-focussed:
        - **Fast** even with plugins etc., as compute effort mostly at build time + mostly CDN cachable (+ some frameworks still over single-page-application behavior)
        - Good for **SEO** as fully rendered pages are delivered
- **Document-focussed** frameworks:
    - Centered around the idea of **generating navigation and content directly from .md files**
    - For main page content to **update** a **rebuild** is usually necessary
    - Even they can be heavily **extended via underlying language**/web-framework
    - In a sense more/**easier to secure**, as no backend or DB services can be attacked
    - E.g. **proper search** usually still built-in, e.g. Giscus commenting often as plugin
- Arguably **more for tech-savvy people**, though templates/document-focussed frameworks **can simplify the setup almost down to few config values**
- **Use you favorite editor with live-preview** (or preview with hot-reload dev-server), no need for separate CMS software
- **Typically free** software

<br>

- [Markdown-document-focussed (⭐sorted)](https://jamstack.org/generators/)
    - [Hugo](https://gohugo.io/) (Go)
    - [Docusaurus](https://docusaurus.io/) (js + React)
    - [Jekyll](https://jekyllrb.com/) (Ruby + Liquid)
    - [Hexo](https://hexo.io/) (js + etc.)
    - [VuePress](https://vuepress.vuejs.org/) (js + Vue)
    - [Eleventy](https://www.11ty.dev/)  (js + Liquid)
    - [MkDocs "Material"](https://squidfunk.github.io/mkdocs-material/) / [Pelican](https://getpelican.com/) (Python + Jinja)
- [More generic web frameworks (⭐sorted)](https://jamstack.org/generators/)
    - [Next.js](https://nextjs.org/) (js + React)
    - [Gatsby](https://www.gatsbyjs.com/) (js + React)
    - [Nuxt](https://nuxt.com/) (js + Vue)
    - [Astro](https://astro.build/) (js + React/Vue...)

!!! info "My decision for MkDocs Material"

    - [**Setup**](https://squidfunk.github.io/mkdocs-material/getting-started/) **couldn't be more simple**: the init command leaves you with a config file and a folder to drop Markdown files in that immediate get rendered to pages with header- and side-navigation. The excellent documentation leads you through further customization through plugins, where anything you might want to start out with from search, over blogging, commenting and RSS to a cookie consent manager can quickly be setup thanks so sensible defaults.
    - As a document-focussed SSG it's **fast, secure, scale, low-maintenance and easily and freely hosted** via GitHub Pages
    - Important for me: it's **Markdown (documentation) focussed** in particular, meaning e.g. relative links just work and documents incl. folders can just be copied around even between other (knowledge management) software
    - I particularly like the emphasis on **good navigation** through fast full-text search, sticky side navigation and TOC and even keyboard shortcuts as well as that large **tables** can easily be rendered from CSV or Excel files

#### (Self-)hosted blogging software/CMS/Website Builder

  > About half the internet runs on WordPress 🤯 [^3]

  [^3]: https://medium.com/@lintonhale/42-of-the-internet-runs-wordpress-to-democratize-publishing-8467f3b8907a

- **Typical minimal setup**:
    - Pay for hosting with one click install of your CMS of choice
    - Basic config like site name, admin account... via wizard
- **Not really free**, as hosting on server or as service has to be paid. Also most powerful plugins can be quite expensive 
- **Battle proven solutions**: having existed a decade longer, WordPress etc. have vast
    - **Communities and documentation**
    - **Ecosystems of plugins/integrations** for any purpose
- **More accessible UI/WYSIWYG approach** compared to SSGs for non-tech-savvy people
- Careful **optimization** might be **necessary** to keep **performance** high
- **Can be harder to troubleshoot** if breaks "under-the-hood", as usually no direct control over the software code
- Self-hosted: **harder to secure and maintain** (updates of service software, plugins...) than document-based SSG or publishing platforms

<br>

- **Typical CMS / Website Builder**
    - [WordPress](https://wordpress.com/)
    - [Drupal](https://www.drupal.org/)
    - [Ghost](https://ghost.org/)
    - [Joomla](https://www.joomla.de/)
    - [Blogger](https://www.blogger.com/)
    - [HubSpot](https://www.hubspot.com/)
    - [Squarespace](https://de.squarespace.com/)

- **Personal knowledge management with publish feature**:
    - [Notion.so](https://www.notion.so/)
    - [Obsidian.md](https://obsidian.md/)
#### Publishing platform

- Main advantage is a quick and easy start:
    - **start writing right away** after sign-up, no maintenance, administration etc.
    - **immediate expose** via the vast traffic, which honestly also feels quite motivating for starters
- **May be paywalled**, but thus might also **allow you monetization of your content**
- You **only own your content (legally)**, but have **little to no control** about everything else. Exporting/moving your content might be practically impossible (without dedicated tools) 
- Usually **very limited to no customization/extension**, e.g. forms, newsletters, content beyond text and images... (though e.g. [Medium offers using your domain](https://help.medium.com/hc/en-us/articles/115003053487))
- **Restricted applicability for personal branding**: not ensured that visitors associate your content particularly with you, not the platform (probably less the case on LinkedIn)
- Networking opportunity amongst authors as well as authors and readers

!!! success "Recommendation"

    **Mirror your own blog** on Medium + LinkedIn <br> 
    ([using canonical links!](https://help.medium.com/hc/en-us/articles/214550207-Import-a-post?ref=hulry.com) to mark your blog as the original source for SEO reasons)

- **Examples**
    - [Medium](https://medium.com/) (135M visits/month)
    - [Substack](https://substack.com/) (45M visits/month)
    - [DEV](https://dev.to/) (12.5M visits/month)
    - [HubPages](https://discover.hubpages.com/) (1.5M visits/month)
    - [Vocal](https://vocal.media/) (3M visits/month)
    - [LinkedIn](https://www.linkedin.com/feed/) (1.7B visits/month)

#### Comparison of selected frameworks

{{ read_csv("frameworks.csv") }}

[^1]: [https://oceanumeric.github.io/blog/jekyll-mkdocs-quarto](https://oceanumeric.github.io/blog/jekyll-mkdocs-quarto)
[^2]: [https://www.bloggersgoto.com/medium-vs-own-blog/](https://www.bloggersgoto.com/medium-vs-own-blog/), [https://hulry.com/medium-vs-own-blog/](https://hulry.com/medium-vs-own-blog/)

### Hosting for static sites

#### GitHub/Gitlab Pages (static sites only)

- GitHub over Gitlab:
    - Better availability
    - Easier integration of free [Giscus](https://giscus.app/) commenting

Details for [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#limits-on-use-of-github-pages):

- Price: **free**
- **Custom domain**: yes
- **Prohibited uses**:
    - **Online business**, e.g. webshop or SaaS solution
    - Handling sensitive data, e.g. passwords or transactions
- **Limits: more than enough** for years of personal blog/brand hosting and you'll be contacted rather than charged in case you exceed the limits
    - File: 1GB
    - Repo: 1GB
    - Deployment: 10min
    - Builds: 10/h (soft)
    - Traffic: 100GB/month (soft)
- Privacy:
    - IPs are logged

#### Netlify

- basically GitHub Pages with [**additional features**](https://www.netlify.com/github-pages-vs-netlify/) like e.g. **CDN, rollbacks, asset optimization, form handling, split testing**
- very **similar usage limits** on **free plan** (but charges you for exceeded limits)
- **direct integration with most SSGs**

### Custom domain + email + SSL

- Presenting your personal blog/brand on your **domain named after you simply looks more professional**
- **Top level domain doesn't matter much**: country specific domains like *.de* only have a **slight local advantage**. Though hosting an international site in English on a *.com* domain isn't wrong either
- If you go for a *.com* domain, you might also be able to get a **cheap bundle offer** (e.g. *.de* + *.com*) for very little additional cost with a domain for your country 
- Afaik [hosting.de](https://www.hosting.de/domains/) is providing the cheapest *.de* domains
- The domain should come **with a SSL certificate**, ideally a wildcard certificate extending to subdomains, as encrypting web traffic this way is so expected nowadays that **you'll even rank lower SEO-wise** for not having one even if your site is basically completely static
- While receiving emails might be possible via a redirect of mails from your domain to your private **email account, for replying** from your domain you either need an email server or account with your hoster - best just get it **in a bundle with the domain**
- If you are comfortable to commit (after 1 year discount), **getting a domain for** the next 10 **years in advance comes at a good discount** e.g. at [namecheap.com](https://www.namecheap.com/)

### Setup, Maintenance & Editing

- **Publishing platforms are the easiest** here in any regard here. While CMSs might be easier so setup than more involved SSGs, CMSs like an **elaborate WordPress setup can be more effort to maintain than a simple SSG solution**
- As **SSGs** are normal software projects, you can use your **favorite editor incl. extensions** and get a particularly comfortable experience if you choose a framework that uses a familiar technology like JS
    - As SSG sites are just code, it's a the very least possible to e.g. use a Regex change the text color of a certain word or alter image captions on your whole site in a certain way in mere seconds - that usually not easily possible with CMSs via their WYSIWYG editors where you would usually need to edit each page/document individually without special plugins (if they exist). Tech-savvy users could of course just edit the page HTML locally, but that's still a bit more cumbersome than if your usual workflow is editing Markdown files like with SSGs
- If you host e.g. on GitHub/GitLab, you can also edit your content with their built-in **web editors incl. (live-)previews** or even 3rd-party editors like [Dillinger](https://dillinger.io/)
- Tt's noteworthy that for **CMS** e.g. for WordPress **plugins** like [WD GitHuber MD](https://wordpress.org/plugins/wp-githuber-md/) usually exist that enable you to **mainly work with Markdown files**

### Backend, Forms & Data Security

- Having a SSG solution with **no backend and DB is totally possible, scalable, reduces cost, maintenance effort and security attack vectors** while **realizing user interaction** e.g. forms is still easily **possible via 3rd-party providers**
- the security and scalability aspect is really interesting: without backend/DB:
    - You can't really easily run out of compute power or run into latency issues, especially since SSG sites can almost be fully cached, so **hosting stays cheap, scaling is easy and no DDoS** attacks to fear about
    - No public endpoint attacks, network intrusion, SQL injection, user credentials to protect, usual dependency vulnerabilities to worry about since code is only responsible for generating your static side and doesn't run after build
    - So especially with document-based SSGs, to **only way really get hacked and be solely responsible for it is to have compromised login credentials to your hoster or 3rd-party services** and then data being extracted or e.g. malicious scripts directly being committed to your repo
- **3rd-party** replacement **solutions** come with **privacy issues and possibly suboptimal UX** however especially on the free tiers as they won't usually be 100% aligned with the existing UX experience on your site (e.g. need to login to comment).
- Even a blog, without e.g. a webshop or other dynamic web service, one can still make good use of forms in various ways, but basically always to better engage with you readers:
    - A **generic contact form** pretty much always makes sense and might even be [legally required](#legal)
    - Email sign-up for **newsletter** is the next most popular tool
    - The **commenting** experience for users is nicer if **no login** like with Giscus or Disqus is required because the comment is handled by your own backend
    - **Polls/surveys** can yield better insights than pure quantitative analytics
    - **Contests and giveaways** can be interested if your niche is related to physical products
    - **Guest posts and local community event/meetup registration** can be interesting if a certain site traffic/size is reached 
- Apart from direct contact and maybe contests/giveaways, many **more specific use-cases go beyond simple form submission but also require handling associated processes** (e.g. newsletter -> delivery, surveys -> evaluation, comments -> moderation) - that why you may find highly **specialized 3rd-party providers** in those areas
    - Thus it might seem practical to decide for a setup with backend and DB to avoid an extensive privacy policy by going for a DIY approach and e.g. managing a newsletter feature yourself, however in the **future more sofisticated solutions would require serious dev work and expertise** or at the very least a lot of manual work to handle e.g. hundreds of newsletter subscriptions yourself - not to mention the effort to make sure all user data is secure
    - In the end, using a backend and forms to handle user data yourself **only makes sense if plugins for your framework exist, that handle everything on your server **without 3rd-party service even in the middle
    - Such plugins are **basically non-existing for SSGs** it seems which means only 3rd-party form services really make sense here
    - **With CMSs they do exist**, e.g. for WordPress you could use free [MailPoet Plugin](https://www.mailpoet.com/) or [The Newsletter Plugin](https://www.thenewsletterplugin.com/) instead of [Mailchimp](https://mailchimp.com/) to manage newsletters. And since newsletters, commenting, polls etc. all don't really require real-time performance, such plugins could probably also run with greater userbases on typical blog hosting infrastructure 

### Themes/Templates & Plugins

- Unlike themes, templates go beyond styling and especially for SSG have a **huge impact on the setup experience and out of the box features**
- Particularly with CMSs but also more popular SSG like next.js, **popular themes are paid** (though they thus might also come with additional support)
- A theme and especially templates are a **central additional dependency**, that
    - **need to be updated**
    - **can e.g. also break your site** from a software perspective
    - **can influence compatibility with other plugins/extensions**
- Might come with a **certain lock-in effect** due to specific features or your customization effort even if the framework isn't changed
- Usually **influences performance** to a greater degree and thus also **SEO**
- Especially with **SSGs** and their more generic nature, in contrast to CMSs, **plugins are more likely to be incompatible** if framework-agnostic  
- A highly popular (and thus e.g. well maintained, documented...) [framework](#publishing-frameworks) with a poor template selection for your intended purpose (e.g. blogging) might be less preferable than another less popular framework where you already found a template which you really like
- For basically all frameworks you can **find theme/templates galleries that usually also come with demo sites** you can check out right away (e.g. [Hugo](https://themes.gohugo.io/)). Ideally they also come with links to the code for the demo site, so you can and should check out if you like the [file structure](#markdown-features--file-structure) 

### Collaboration & Commenting

- **Author collaboration** 
    - Is probably not a huge concern with website aimed at personal branding
    - Via Git for SSGs and multi-user-management in CMSs **usually also possible at least asynchronicity**
- **User collaboration / commenting**
    - Good idea from a **core reader engagement** point of view
    - **Without backend**
            - **Content**: often solved via "**edit this page**" links that lead to the **page source on GitHub**, where users can propose changes via the established PR request process
            - For **commenting**    
                - The popular [Disqus](https://disqus.com/) sadly comes with additional privacy protection baggage, a Disqus or facebook/Google/Twitter login as well as ads in the free version
                - [Giscus](https://giscus.app/) is the most popular **cost and ad-free** solution and also **easy to integrate** (especially if the site repo is also on GitHub) via a **simple script snippet**, though requires and only works with a GitHub login (which might be a non-issue for a technical audience)
    - SSG sites **with backend or CMS** might even offer plugins for e.g. line specific user commenting

### Newsletter & RSS

- **Newsletter**
  - Though email communication **may seem outdated**, due to the **personal nature, in practice it's still one of the best methods** to build a **core followership** in particular
  - If you have a backend you can of course achieve subscription via a simple HTML form if you want to manage subscriber data yourself, though **considering** the legal **implications** (data protection) as well as necessary complementary features such as subscription/marketing consent management or e.g. [double-opt-in](https://www.linkedin.com/pulse/reverse-double-opt-in-gdpr-consent-guarantee-dr-stephan-g%C3%A4rtner) and also the effort to manage >100 subscribers and especially targeting specific subscribers - you probably **need at least a specialized (probably commercial) marketing plugin**
  - **3rd-party service** like [Mailchimp](https://mailchimp.com/) (free with 1000 mails/month) offer a free and simple start and e.g. in case of Mailchimp not only provides the classic script snippet method but also offers **newsletter forms hosting** (sign-up, management...) so that you can use a simple link instead, which thus makes e.g. sign-up possible from everywhere even when HTML is not supported (like a WhatsApp group if you wanted) 
- **RSS**
    - Is maybe underappreciated by non-power-user for how it **can deliver content from custom sources with custom filtering without** e.g. the need to disclose one's email for a generic **newsletter** delivery
    - Usually available in all frameworks, customizable to varying degree, e.g. Docusaurus even supports [multiple separate blogs + feeds!](https://docusaurus.io/docs/blog#multiple-blogs)
    - 3rd-party services like [Feedburner](https://medium.com/@davideiaiunese/the-problem-why-a-newsletter-baae4409a526) exist than can manage subscribers (usually need to include script snippet for sign-up), read the RSS and deliver updates as newsletter

### Performance & SEO Optimization

- Basically all **SSGs offer very good performance**, often with [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) scores of ~100% out of the box, which shouldn't degrade to quickly if you're careful with plugins
- **CMS** like Wordpress are more **known to degrade in performance** with plugins
- **Templates for both SSG and CMS usually ensure that performance & SEO optimization** potential of the underlying framework is utilized as much as possible given the config options, e.g. lazy loading of images or exposing site and article metadata for web crawlers (which is why e.g. "optional" SEO config values shouldn't be ignored during setup)
- Automatic optimization of images, e.g. downsizing or converting to *.WebP* images, is more rare out of the box, so plugins should be found or a [small script](https://github.com/phil-m-kopp/phil-m-kopp.github.io/blob/main/convertWebP.py) be included in the CI/CD pipeline
- A CDN might not be necessary for text-focussed sites, though e.g. [Cloudflare](https://www.cloudflare.com/) offers a free, near zero-config solution while hosting with Netlify even comes with a CDN
- Larger popular JS libs like [charts.js](https://www.chartjs.org/) can be directly included from [cdnjs.com](https://cdnjs.com/)
- [Google Search Console](https://search.google.com/search-console) is kind of the reverse of Google [Analytics](#analytics) regarding who delivers data to who: with Google Search Console you prove you own your site and then **Google shares insights regarding SEO optimization e.g. what users search to get to your site via Google** - while **with Google Analytics you primarily share data with Google about what your users do there to get insights about possible marketing/business optimizations** in return

### Analytics

- [**Google Analytics**](https://analytics.google.com/) is the **de facto standard** for website analytics, **free** and thus pretty much **well supported** in any [framework](#publishing-frameworks)
- Other popular options like [Matomo](https://matomo.org/) often aren't free
- [Amplitude](https://amplitude.com/)'s free plan seems usable
- **Integration** is often achieve by simply including a **script snippet**
- **Quite relevant from a privacy perspective**, as e.g. non-anonymized IP addresses are already considered **PII** and tracking is usually nothing users particularly like and openly agree to (compared to submitting ones email for a newsletter)
- You may decide that e.g. authenticity is a key value for and **wouldn't change your content** in any way even if you know you could increase your traffic by e.g. focussing on content that your users prefer according to analytics - then you **can also save yourself a huge** [**privacy headache**](#imprint-privacy-policy-cookie-consent), maybe even a consent manager altogether (as tracking is usually the first 3rd-party service included in many sites)

### Social Sharing

Example: [:fontawesome-brands-x-twitter:](https://twitter.com/intent/tweet?text={{- page.title | urlencode -}}&url=https://philipp-kopp.com/{{- page.url | urlencode -}})

- Especially if your content niche is **non-technical, sharing good content should be made as easy as possible** to the user to invite traffic, usually via buttons/links
- There's **no need to e.g. include a facebook button as script and inviting privacy issues** and degrading performance: all social service should provide a **sharing url structure** for desktop and mobile (e.g. ```whatsapp://send?text={text/url}```) can simply be looked up and put on the site as plain link/button (though consulting the documentation how to provide the current page url to the link is necessary)
- IMO those buttons **could also be sticky**, not only e.g. at the bottom of the page, if the readers want's to already share mid-read
- As more than about 6 buttons would start to become a bad user experience, it makes sense to adapt the **selection of social buttons depending on your target audience possibly geographic location** of your average reader (find out in your analytics tool)

### Tags & (internal) Links

- Tags are **useful to critical** in many ways
    - **For user to find**
        - interesting content in the first place
        - more related content on your site, thus **staying longer**
    - For **SEO** optimization
    - Picked up by **RSS** module (as are blog "categories"), potentially influencing newsletter delivery
- **DOs/DONTs**
    - Post with more than 10-15 tags can be considered as spam with reader apps
    - Don't be too specific, e.g. "#workingWithEbonyWood
    - Delete underused tags
    - Tag list should be prominently places, maybe even be sticky when scrolling
    - Tags should ideally also be considered by the search
    - **Tag archive pages** (listing articles for a clicked tag)
        - are essential for finding related content
        - shouldn't be indexed: ```<meta name="robots" content="noindex, follow">```
        
- [**(Bi-directional) links**](https://maggieappleton.com/bidirectionals): pages being explicitly aware and **listing of both incoming and outgoing links**
    - are considered an essential concept of [second brains](https://fortelabs.com/blog/basboverview/) and digital gardens
    - sadly a **rarely seen feature** in SSGs or CMSs
    - function similarly to tags in **keeping readers on the pages**
    - at the very least it **should be easily possible to link to any page on the site**
        - incl. blog articles, particularly if you want the publish date as part of your canonical url
- **"Autolink"**:
  - type A: **converting existing shortlinks/"WikiLinks"** like `[[Typic XYZ]]` to normal form `(Typic XYZ)[../topic_xyz.md]`, e.g. [autolink plugin](https://github.com/zachhannum/mkdocs-autolinks-plugin) for MkDocs
  - type B: automatically **converting normal text** to links based on text matching, e.g. [Internal Link Juicer](https://wordpress.org/plugins/internal-links/) for Wordpress

### Tables

- IMO, tables are **just to good for presenting e.g. comparisons to pass up on them**
- However Medium.com doesn't support them at all and the out of the box **editing experience in Markdown is notoriously bad** (even IDE plugins often don't improve this by much)
- **CMS** solutions usually come with **acceptable table editing** in their WYSIWYG editors - Notion.so is particularly pleasant and also offers lighter macro/scripting capabilities
- **Plugins** for CMSs or SSGs may even provide *.csv/.xlxs/.json/.yaml* **table data parsing or even direct rendering** (ideally while preserving Markdown formatting, as e.g. the case for the [framework comparison table above](#comparison-of-selected-frameworks)), making local editing of large tables e.g. via MS Excel or proper table editing IDE plugins possible

![Alt text](table-editing.webp){: loading=lazy}

### Diagrams (as markdown)

```md
´´´mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
´´´
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

- **Directly rendering** diagrams usually produces ***.svg* output**
    - Scale nicely
    - Take up very little space
    - Come with selectable text
    - While staying editable in the document as markdown
- **draw.io diagrams** can be saved as *.drawio.png*, making handling a **non-issue in any environment** without special support
    - Stay fully editable via the draw.io apps
    - Can also be rendered or converted like a normal .png image
    - Can be exported again e.g. as an copy/paste HTML iframe with additional features like zooming 

### Localization

- Localization is **a more rare feature**
- Even then **often only a language switch** is provided, but translations have to be provided manually as separate files for each language
- Some (often client-side) plugins offer **instant translation** while reading
- With SSGs/web frameworks it's probably easier to e.g. translate content during built time
- Interesting if you want to write in English for global reach **but e.g. your niche is also particularly popular in your country, mostly not talked about in English by tech-savvy people** so that users would use a browser translate plugin (e.g. home improvement in Germany)
- Translation of image text extremely rare

### Mobile first

- **Responsive frontend design** is the norm now, but the **doesn't automatically mean mobile first**
- **Try viewing** your favorite articles on **mobile** (if not the case right now 😏) or via desktop browser dev tools and see if e.g. **TOC, social buttons, header, article metadata incl. author info, tags, cookie consent** is still somewhat **usable and e.g. tables don't wildly overflow**

### Markdown features & file structure

!!! tip "File structure"

    - This can be a **crucial [framework](#publishing-frameworks) decision**, as e.g. Jekyll wants to see articles, assets/images and tabular data in different directories and e.g. also **doesn't support simple linking to other files in the same directory** as the article - which is **very different to how Markdown e.g. used for documentation usually works**
    - Especially for people who maintain their [second brain](https://fortelabs.com/blog/basboverview/) e.g. with Obsidian.md or who got employer approval to release company-agnostic internal knowledge documentation they wrote as a blog post, this means that a workflow where knowledge content is more or less simply published from already existing local content is not possible
    - As **efficiently using existing export knowledge (especially gained in a professional environment) is IMO an important strategy of building a professional personal brand**, this was a deal breaker regarding Jekyll for me

- The [basic Markdown syntax](https://www.markdownguide.org/basic-syntax/) that's (almost) guaranteed to be supported everywhere is far less rich (e.g. no tables) than many are used to e.g. from GitHub
- **The more you lean into extended syntax**, [Javascript enhanced Markdown "MDX"](https://mdxjs.com/) or even more framework-specific features
    - the less you'll get to enjoy editor live-previews
    - the more your options to simply copy/paste/migrate your *.md* files decrease, again **possibly critically limiting leveraging of existing knowledge**
- **Acceptable, widely supported and very useful** extended features IMO include
    - Tables
    - Code blocks with syntax highlighting (not necessarily inline though)
    - Heading IDs: for referencing/linking in large articles
    - Inline HTML: e.g. forcing line breaks ```<br>```
    - [Diagrams as markdown](#diagrams-as-markdown): pretty much supported via plugins everywhere
    - Frontmatter: necessary for basically all frameworks for page metadata (though syntax can slightly differ!)
    - Quoting via ```> quote text```
    - <i>Mixing HTML and Markdown</i> ```<i>Mixing HTML and Markdown</i>``` for quickly realizing some special formatting. As Markdown is rendered to HTML anyways, this even works with live-preview. That doesn't mean all HTML like e.g. a draw.io ```<iframe>``` snippet will render or even work anywhere though 
    - Reference-style links: to re-use links or for simple script links like [Alert][Alert] ```[Alert]: javascript:alert("Foo")``` which only seem to work like this
- **Nice to have and/or not widely supported**
    - Highlighting (vs **emphasis**), strikethrough, sub/superscript
    - Emoji shortcodes like :smile: (```:smile:```): maybe use text emojis instead
    - Footnotes: often times not supported
    - ```[TOC]``` (as tag): at least syntax is often different between frameworks. Though a good framework should render a TOC e.g. in sidebar anyways
    - Wiki-style links (e.g. Obsidian.md: ```[[page-xy]]```)

[Alert]: javascript:alert("Foo")

## Legal

!!! warning "Disclaimer"
    
    This does not constitute any form of legal advice. Use at your own risk.

- **Germany in particular** comes with **quite strict/involved** data protection requirements due to GDPR and other legal requirements

### Imprint, Privacy Policy & Cookie Consent

- If you **publish content under your domain** and simply put are "**not just a author on a publishing site**" like Medium.com, Obsidian.md or Notion.so and want to legally do business in a "GDPR country" or live in one, you are responsible for providing the following:
    - **Privacy Policy**
        - **Use a generator** like from [datenschutz-generator.de](https://datenschutz-generator.de/), [e-recht24.de](https://www.e-recht24.de/muster-datenschutzerklaerung.html), [Termly.io](https://termly.io/products/privacy-policy-generator/)
        - tThe most involved because individual process is probably to describe which data is processed how, why and for who by which 3rd-party (service), incl. a link to their privacy policy 
        - A more elaborate policy (declaring to collect more data from more sources than you actually do) is afaik not harmful from a legal perspective, only possibly intimidating to users
    - Under GDPA: **Data Processing Agreements (DPA)**
        - With 3rd-parties that process your users data and without e.g. there being a NDA
        - Usually: your hoster, Google Analytics, newsletter service
    - **Cookie/Script Consent** "feature"
        - **Non-essential** (e.g. Google Analytics, unlike e.g. shopping cart content related cookies) **cookies AND other data collection scripts etc.** need to be **blocked** until explicitly approved by the user
        - This also means that the site needs be stay usable even if consent is not given
        - A "reject all" button is optional
        - A **link/button to change/"manage" consent** must also always be available on the page (e.g. footer)
        - Built-in framework cookie consent solutions are somewhat rare with SSGs, especially managing consent at any time. Though basically it's only about simply not loading the typically providing tracking script snippets until a consent cookie is present after pressing a button (see solutions for [react](https://www.npmjs.com/package/react-cookie-consent), [Hugo](https://hugocodex.org/add-ons/cookie-consent/), [Jekyll](https://jekyllcodex.org/without-plugin/cookie-consent/))

- This **setup/maintenance effort as well as possible legal liability** in case of e.g. data breaches is the main reason why **"free" 3rd-party services/scripts shouldn't be mindlessly relied on**
    - E.g. simply make your [own sharing links/buttons](#social-sharing) instead
- If you publish content **in Germany**, you **always need** an **imprint**:
    - Consisting of an address for mails via post (can be your private but also be another address with mail forwarding to you - "Impressumsservice") as well as a phone numbers OR contact form (email address alone apparently not sufficient)
    - Bi-directional links to other social media presences should also go here, if there's a connection to any commercial activity via those social media presences

- All of the above need to always be accessible and clearly labeled, e.g. as links in the footer

### Copyright/Licensing

  - **Your content** is usually automatically **protected under copyright law** in most countries
  - It still doesn't hurt to **point that out on all pages e.g. in the footer** via "© {year} {name}. All rights reserved under {license}"
  - You can decide to declare a **more lax copyright, so that others can build upon your work** (usually given author attribution): e.g. use the [Creative Commons License Chooser](https://chooser-beta.creativecommons.org/) and put the output on your page

## Site Structure & Content

- **About** page:
    - As a site for **personal branding** has a professional/business goal, IMO it should first and foremost have a "**professional**" section where you detail:
        - Your personal brand pitch
        - Your professional experience: 
            - LinkedIn etc. profile links
            - Summary skills, certifications, achievements, testimonials
            - Work/project portfolio with links/screenshots/demos (e.g. code repos as a developer)
            - Link to your resume document
        - Your contact details and/or a contact form
    - If you aim for a **brand specifically around your name** for a really personal touch rather than proxy brand name with you more in the background, I'd also prominently place a nice **photo of you** here (as well as maybe in the site header or sidebar) accompanied with a "personal" section for smoother networking
    - As it's really easy now to **receive money** e.g. via [PayPal.me](https://paypal.me/PhilMKopp) Page, IMO it doesn't harm to discretely provide this possibility for people who might want to thank you for the value you provide outside of contracts e.g. via quality blog articles
- **All articles** page:
    - Should provide an **overview over all available categories and show the most recent or popular articles**
    - Usually also makes a **good home/root page** (a permanent redirect config might be necessary so that "yourdomain/" points to "yourdomain/all-articles")
    - IMO "articles" imply a bit more professionalism than "posts" - which can an advantage if your style aligns with it 
- All **tags** and tag specific pages:
    - Aside a page that lists all tags, clicking on a tag anywhere **should lead to an overview page for the particular tag** listing all other pages with that tag
- **Category** pages:
    - IMO for easy navigation **each main category you write about** should show up in the main navigation (e.g. header) as well

!!! warning "Mixing totally different topics"
        
        - Mixing totally different topics (e.g. political/religious & tech/science content) without overarching connection/theme/principles (e.g. country or general news) on the same site should come with **careful** consideration for a professional brand, as content here usually expected to be higher quality and more objective than compared to e.g. a personal hobby blog
            - Creating expert content in diverse topics is naturally more challenging and even then it's harder to convey a clear brand message
            - Diverse topics can make having a user-friendly [RSS feed & newsletter](#newsletter--rss) hard, as more fine grained delivery control is necessary for the admin or user in order to not spam readers with unwanted content

- **Footer/Sidebar** should contain:
    - Copyright note
    - Links to
        - privacy policy, imprint and cookie consent management
        - your social profiles
        - the framework & theme you used - even if attribution is not required, it's a free and [quite impactful way to thank the authors](https://squidfunk.github.io/mkdocs-material/setup/setting-up-the-footer/#generator-notice) for the usually free software you use