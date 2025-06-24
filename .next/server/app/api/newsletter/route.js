"use strict";(()=>{var e={};e.id=497,e.ids=[497],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1282:e=>{e.exports=require("child_process")},4770:e=>{e.exports=require("crypto")},665:e=>{e.exports=require("dns")},7702:e=>{e.exports=require("events")},2048:e=>{e.exports=require("fs")},2615:e=>{e.exports=require("http")},8791:e=>{e.exports=require("https")},8216:e=>{e.exports=require("net")},9801:e=>{e.exports=require("os")},5315:e=>{e.exports=require("path")},6162:e=>{e.exports=require("stream")},2452:e=>{e.exports=require("tls")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},732:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>m,patchFetch:()=>h,requestAsyncStorage:()=>l,routeModule:()=>c,serverHooks:()=>d,staticGenerationAsyncStorage:()=>g});var s={};t.r(s),t.d(s,{POST:()=>p});var o=t(9303),a=t(8716),n=t(3131),i=t(7070),u=t(5921);async function p(e){try{let{email:r}=await e.json();if(!r)return i.NextResponse.json({error:"Email is required"},{status:400});if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r))return i.NextResponse.json({error:"Invalid email format"},{status:400});let t=await (0,u.r)({name:"Newsletter Subscriber",email:r,subject:"Welcome to DSA Parent Kit Newsletter",message:"Thank you for subscribing to our newsletter!"});if(!t.success)throw Error(t.error);return i.NextResponse.json({message:"Successfully subscribed to newsletter"},{status:200})}catch(e){return console.error("Newsletter subscription error:",e),i.NextResponse.json({error:"Failed to subscribe to newsletter"},{status:500})}}let c=new o.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/newsletter/route",pathname:"/api/newsletter",filename:"route",bundlePath:"app/api/newsletter/route"},resolvedPagePath:"C:\\Users\\DELL\\Documents\\DSA PARENT TOOLKIT\\DSA PROJECT\\app\\api\\newsletter\\route.ts",nextConfigOutput:"export",userland:s}),{requestAsyncStorage:l,staticGenerationAsyncStorage:g,serverHooks:d}=c,m="/api/newsletter/route";function h(){return(0,n.patchFetch)({serverHooks:d,staticGenerationAsyncStorage:g})}},5921:(e,r,t)=>{t.d(r,{r:()=>o});let s=t(5245).createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT),secure:!0,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASSWORD}});async function o(e){let{name:r,email:t,subject:o,message:a}=e,n={from:`"DSA Parent Kit" <${process.env.SMTP_FROM}>`,to:process.env.CONTACT_EMAIL,subject:`Contact Form: ${o}`,text:`
Name: ${r}
Email: ${t}
Subject: ${o}

Message:
${a}
    `,html:`
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${r}</p>
<p><strong>Email:</strong> ${t}</p>
<p><strong>Subject:</strong> ${o}</p>
<p><strong>Message:</strong></p>
<p>${a.replace(/\n/g,"<br>")}</p>
    `},i={from:`"DSA Parent Kit" <${process.env.SMTP_FROM}>`,to:t,subject:"Thank you for contacting DSA Parent Kit",text:`
Dear ${r},

Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.

Your message details:
Subject: ${o}
Message: ${a}

Best regards,
DSA Parent Kit Team
    `,html:`
<h2>Thank You for Contacting Us</h2>
<p>Dear ${r},</p>
<p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
<h3>Your Message Details:</h3>
<p><strong>Subject:</strong> ${o}</p>
<p><strong>Message:</strong></p>
<p>${a.replace(/\n/g,"<br>")}</p>
<p>Best regards,<br>DSA Parent Kit Team</p>
    `};try{return await Promise.all([s.sendMail(n),s.sendMail(i)]),{success:!0}}catch(e){return console.error("Email sending failed:",e),{success:!1,error:"Failed to send email"}}}}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[276,770],()=>t(732));module.exports=s})();