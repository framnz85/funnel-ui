import React from 'react';
import { RightCircleOutlined } from '@ant-design/icons';
import { isMobile } from 'react-device-detect';

import { imagesDir } from '../components/objectNeeded';

const SalesContent = ({handleButtonClick, amount, spotTaken, spotLeft, showInitButton}) => {

    const schedContainer = {
        width: isMobile ? "100%" : 250,
        fontSize: 16,
        border: "1px solid #4682B4",
        marginLeft: 3,
        marginBottom: 3
    }

    const schedHeading = {
        backgroundColor: "#4682B4",
        color: "#fff",
        padding: "5px 10px",
        textAlign: "center"
    }

    const schedBody = { padding: 10 }
    const MentoringGroup = imagesDir + "mentoringgroup.png";
    const SampleDelivery = imagesDir + "sampledelivery.png";
    const NimfaManiscan = imagesDir + "nimfamaniscan.png";
    const McjhimBumacod = imagesDir + "mcjhimbumacod.png";
    const GregSinugbojan = imagesDir + "gregsinugbojan.png";
    const KleinDelosSantos = imagesDir + "kleindelossantos.png";
    const BuyingCustomer = imagesDir + "buyingcustomer.png";
    const Order18000 = imagesDir + "order18000.png";
    const Order28000 = imagesDir + "order28000.png";
    const OgpaWorkshop = imagesDir + "ogpaworkshop.png";
    const MoneyBackGuarantee = imagesDir + "moneybackguarantee.png";
    const ActoionTakerGuarantee = imagesDir + "actoiontakerguarantee.png";

    return (
        <div style={{marginTop: 20, fontSize: isMobile ? 16 : 20}}>            
            <div align="center">
                <span style={{ color: "#F00", fontSize: isMobile ? 20 : 32 }}>"Give Me <b>2 Hours A Day For 5 Days</b> To Teach You How To Completely Build A Self-Operated Online Grocery Business And <span style={{ textDecoration: "underline" }}>Make A Lot Of Money</span>"</span>
                <br /><br />

                <span style={{color:"#009A57", ontSize:"22px", fontStyle:"italic", fontSize: isMobile ? 18 : 24}}>Then I'll Give You An <span style={{textDecoration:"underline"}}>eCommerce Website</span> Wherein <b>I And My Staff Will Be The One Who Will Do The Uploading Of Grocery Items Into Your Website</b> So You Can Start The Business Right Away!</span>
                <br /><br />
            </div>

            Isa ka bang empleyado or work from home individual  na <u>gustong magkaroon ng online negosyo</u>? Or isa ka rin bang meron ng traditional business pero <b>gustong i-transform ang traditional business</b> mo into online business para <u style={{color: "#880808"}}>maparami pa ang customers at sales</u>?
            <br /><br />

            Or… Ikaw ba ay isang affiliate or network marketer na marami ng sinalihang company pero hindi na alam kung paano ibebenta yung mga product para kumita ng comission? Or baka naman feel mo lang na magnegosyo nalang ng online para di ka na umaalis ng bahay
            <br /><br />

            <u>Lalo na ngayong maraming nagsisilabasang iba’t ibang nakakahawang sakit?</u>
            <br /><br />

            Then… Give me Two(2) Hour a Day for 5 (Five) Straight Calendar Days to Teach You how to <u>Completely Build</u> a
            <br /><br />

            <center><h2 style={{color: "green"}}>Self-Operated Online Grocery Business</h2></center>
            <br />

            And <u style={{color:"red", fontWeight: "bold"}}>Make a Lot of Money</u> with it
            <br /><br />

            Within 5 days, I'll give you an <span style={{color: "green", fontWeight: "bold" }}>eCommerce Website</span> wherein me and my staff will be the one who will do the <u>Uploading Of Grocery Items</u> into it
            <br /><br />

            So that you can <u>have a website</u> that has <b style={{color: "blue"}}>already grocery items</b>. Ng sa ganun ay di mo na kailangan pang mag-hire ng mga professional to do and build it for you. This way… You can start your Online Grocery Business right away!
            <br /><br />

            Hi, ako nga pala si Francis Clavano and I am a full-time online entrepreneur. I am also an online coach for more than <u>6 years teaching and mentoring thousands of people</u> all over the Philippines on how to <b>CREATE and BUILD a Successful Online Businesses</b>.
            <br /><br />

            <center><img src={MentoringGroup} alt="Mentoring Group" style={{width: "100%"}} /></center>
            <br />

            The picture above are the people in my mentoring and coaching team. Over the years of doing my online grocery business I already earned a gross income of <span style={{color: "green", fontWeight: "bold"}}>more than 10 Million pesos</span>.
            <br /><br />

            But let me take you first back to the time when I don't have this business yet. The time when I was still struggling how to make money online. Like you I was also dreaming of <span style={{color: "#0096FF"}}>having a profitable business</span>.
            <br /><br />

            Before I quitted my job, I have ventured into a lot of businesses. I have 2 internet cafe, some fruit businesses, and I also ventured in lending business.
            <br /><br />

            <i>"Pero sadly lahat <b>nalugi</b>!"</i>
            <br /><br />

            One time when I was reading my Facebook timeline, I read a statement from the richest guy on Earth (Bill Gates), he says… "If your business is not on the internet then your business will be out of business".
            <br /><br />

            At that moment I quietly tell myself... <b>AHA! Kaya pala hindi nagsa-succeed ang mga businesses ko dahil hindi ko ginagamit ang internet sa pagbebenta ng mga products and services ko.</b> That statement of Bill Gates is not just prophetic but it is really happening now!!!
            <br /><br />

            <span style={{color: "#0096FF"}}>In fact, pinabilis pa nga ito nung nagka pandemya!!!</span> That’s why at that moment I immediately started to think what other types of business will I get into where that <b style={{color: "red"}}>business can be made online and long-term</b>.
            <br /><br />

            At first, I was planning to copy the concept of Lazada and Amazon business selling non-consumable stuff online like jewelry, shoes, and mobile phones.
            <br /><br />

            But it doesn't work for me as I don't have a big capital because I need to put up an initial stocks for the items and I also need enormous amount of money to pay rentals for a commercial space and stockroom. Which I could not afford to as I just recently lost a lot of money from my previous businesses.
            <br /><br />

            And if I will promote it, the only marketing strategy I know is to spam a post on Facebook Groups like what most online entrepreneurs do which is for me not effective for long term.
            <br /><br />

            Then I consider other businesses which I can sell consumable goods such as <u>fruits, vegetables, diapers, and rice</u>.
            <br /><br />

            To the point, I finally get into...
            <br /><br />

            <center><h2 style={{color: "green"}}>Selling Grocery Items Online</h2></center>
            <br />

            Last June 2015, I started my Online Grocery Business here in Davao City. I arrived <b>selling grocery products</b> online because of these very <b style={{color: "#0096FF"}}>Practical Reasons</b>
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> Grocery items are being bought only after a customer pays his order which means <b style={{ color: "green" }}>you don't need to have the capital for initial stocks</b>.
            <br /><br />
            
            <span style={{ color: "red" }}>&#10004;</span> You don't need a big room or warehouse to store grocery products so <b style={{ color: "#0096FF" }}>you don't need to invest a very large amount of money for estate cost</b>.
            <br /><br />
            
            <span style={{ color: "red" }}>&#10004;</span> You don't need to rent a space as you <b style={{ color: "green" }}>don't need to display your grocery items</b>. <i>(Wala ka ring monthly operational expenses gaya ng tubig, kuryente, security, and employees)</i>
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> It is <u>consumed in a routinely way</u> so your <span style={{ color: "#0096FF" }}>customers will order it in a regular basis</span>. (Once mo lang sila iimbetahin at paulit-ulit na silang bibili)
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> Grocery items are basically food so it is forever be needed by people that's why once you establish it, <b style={{ color: "green" }}>you have a business that runs for a longer period of time</b> (Your business stops only when people stop consuming groceries - which is currently impossible!).
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> <span style={{ color: "#0096FF" }}>You can do it yourself</span> so you may never hire an employee. You may hire a driver or a kargador but it is only optional. (You can even tap courier services gaya ng Transportify, Mobee, etc. for the delivery)
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> <b>YOU’LL LEARN TO LOVE COMPETITION</b> through the business. Online grocery business is now gaining popularity to a lot of people specially during the pandemic. The more people doing the same business is already a sign na ang business nato ay Patok at siguradong kikita ka!
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> Because it's online, <b style={{ color: "#0096FF" }}>you can sell it anywhere you want</b>. You can sell it to other cities, to other provinces, to the whole country or even to the whole world as long as you have a courier service that can deliver on that particular location.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> You can also <b style={{ color: "green" }}>sell it online at a little higher price</b>. This is because you are giving service to people by providing them convenience. Instead na sila pa yung bibili sa supermarket, ngayon hindi na! Idedeliver pa ito mismo sa bahay nila.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> Grocery Store or Supermarket are visible everywhere that's why <b style={{textDecoration: "underline"}}>supply for your grocery items is abundant</b>.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> Plus <span style={{ color: "#0096FF" }}>Manufacturers and Distributors of grocery products are now eager to adopt an e-commerce concept of selling</span> so they are finding online store business owners who do online grocery.
            <br /><br />

            <i style={{color: "#EE4B2B"}}>Once you get supply directly from distributors or manufacturers, you can earn more than twice the profit while the prices of your items is the same as that of the supermarket or even lower</i>
            <br /><br />
            
            <span style={{ color: "#85219C" }}>And because of the internet it will not be hard for you to find customer in any business today.</span>
            <br /><br />

            There is actually an emerging <b style={{color: "red"}}>Marketing Strategy</b> that only few people knew about and it is the strategy that gave birth to a lot of <u>Multi-Millionaire Entrepreneurs</u> doing business online nowadays. Entrepreneurs like Robert <b>Kiyosaki, Bo Sanchez, Eduard Reformina, and Jon Orana</b> are using this strategy to make multi-million pesos of profit online!
            <br /><br />

            The good news is that this strategy can also be applied to your online grocery business. 
            <br /><br />

            <center><h2 style={{color: "red"}}>How?</h2></center>
            <br />
            
            You only need to learn it. I myself is already applying it to my own online grocery and it provides me a lot of sales! <b style={{ color: "green" }}>Let me show you one of my actual profit when I use this strategy.</b>
            <br /><br />

            Last time, I delivered 4 orders to my customers.
            <br /><br />

            <center><img src={SampleDelivery} alt="Sample Delivery" /></center>
            <br /><br />

            I earned a net profit of P 1,641.14 (10% of the sale + delivery fees) and it only took me 2 hours to deliver these orders to my customers.
            <br /><br />

            <i>"This is a proof that it is really possible to have a business that <b style={{ color: "green" }}>you only need to spend 2 hours a day to earn a net income of 1,600 pesos</b>"</i> ... It's already an income of a junior manager in a company working 8 hours within the same day!
            <br /><br />

            One of the best thing about online grocery business is that <u>it doesn't require so much of your time</u> so if you have a day job or you are busy with another business, you can do it right after your work. Now if it provides big income for only 4 orders, <b style={{ color: "red" }}>imagine how much revenue it can give you if you have 8, 10, 20, or more orders a day</b>.
            <br /><br />

            That would be a lot of money, right?
            <br /><br />

             And don't worry because you can <span style={{ color: "red" }}>Easily learn the Marketing Strategy</span> used by successful entrepreneurs I mentioned a while ago and I can help you with regards to that!
            <br /><br />

            Just continue watching...
            <br /><br />

            <center><h2 style={{color: "green"}}>So… How To Earn 100k Pesos Or More A Month?</h2></center>
            <br />

            Last January 2016, right after I quitted my job, I decided to teach people how to <u style={{ color: "green" }}>Create and Establish their OWN online grocery business</u>, the exact online grocery business I have.
            <br /><br />

            I teach them how I do it and <u>how they too can do this kind of business</u> and <span style={{ color: "red" }}>make a lot of money</span> whether they are a professional, employed, OFW or even someone who wanted <u>to have a sustainable and long-term income</u>.
            <br /><br />

            When I started my online grocery business it took me almost a year to build it because I need to <u>learn all the necessary knowledge and skills</u> in establishing this kind of business.
            <br /><br />

            During those times there are a lot of painful mistakes I experienced. <i style={{ color: "#0096FF" }}>“I wish I could have someone who would guide me so I can build it easier, faster with fewer or almost no mistakes.”</i>
            <br /><br />

            Especially in the <b style={{ color: "red" }}>MARKETING</b> - <b>(You need to learn a lot on this!)...</b> But sadly there is none.
            <br /><br />

            Now, since I already have those mistakes and I don't want others to experience it, I decided to <u style={{ color: "green" }}>teach people how to do the right steps</u> in establishing an online grocery business. Right now, because of what I taught them, <u style={{ color: "red" }}>more and more people are earning huge profit</u> from their online grocery business.
            <br /><br />

            Here are some of them and their corresponding sales…
            <br /><br />

            <center><img src={NimfaManiscan} alt="Nimfa Maniscan" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            This is from Nimfa Maniscan, sabi niya… “Hi all, share ko lang… I have a successful delivery kahapon, 2nd order sa online grocery ko.”
            <br /><br />

            <center><img src={McjhimBumacod} alt="Mcjhim Bumacod" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            Ito naman kay Mcjhim Bumacod… “First order is worth Php 5k at yung second order ay worth Php 5.6k naman.”
            <br /><br />

            <center><img src={GregSinugbojan} alt="Greg Sinugbojan" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            “Hi Sir Francis. Sorry disturb ako excited lang kasi. At last the wall of ice in my website has been broken. I got my first real ice breaker sale today. Nawala antok ko pag open ko ce mayron e-store email. Thank you very much sir.” – Greg Sinugbojan
            <br /><br />

            <center><img src={KleinDelosSantos} alt="Klein Delos Santos" width={ isMobile ? "100%" : ""} /></center>
            <br /><br />

            At itong kay Klein Delos Santos, sabi nya… “Iba talaga coach… Kahit maliliit basta palagi. Naka 8 customers ako ngayong araw na to. P26k in total sales.”
            <br /><br />

            These are some of the few thousand people who is now <b style={{textDecoration: "underline"}}>starting to earn</b> from their online grocery business.
            <br /><br />

            Now, aside from learning the knowledge, skills, and marketing, one of the major thing <u>you need to prepare</u> in this business is an <b style={{ color: "red" }}>Ecommerce Website</b>. I found out that hiring a web programmer would cost you around <i style={{fontWeight: "bold"}}>50,000 pesos to 100,000 pesos</i> to do an e-commerce website.
            <br /><br />

            Depende na rin sa looks at functionality na gusto mong meron nito at <u>hindi pa kasali dyan ang maintenance and hosting cost</u>. Plus, after pa nung e-commerce website you need also to <u>upload the details of all the grocery items</u>.
            <br /><br />

            Hindi yan ganun kadali! You need to take a lot of time to do it.
            <br /><br />

            Imagine that there are over 45,000 grocery items that you need to upload. <b><i>How can you do that when you are employed or have limited time?</i></b>
            <br /><br />

            It's almost impossible!
            <br /><br />

            At ito pa! Upon operating your online grocery business, you need to constantly monitor and update grocery prices as it is changing so fast. Because if not…  <span style={{ color: "#D2042D" }}>You may loose money!</span>
            <br /><br />

            But not for you this time because I have developed a workshop called <b style={{ color: "green" }}>Online Grocery Prosperity and Abundance Workshop</b>
            <br /><br />

            Wherein during the workshop I will going to <u><b>give you an eCommerce Website</b> and we will be the one who will do the uploading and monitoring of grocery items into your website</u>.
            <br /><br />

            Not only that, I will also going to <u>teach you the needed knowledge and skills</u> how to <b style={{ color: "green" }}>bring more customers and sales</b> into your business. Let me talk more about that later…
            <br /><br />

            For now, I would like to show you <b style={{ color: "#8B0000" }}>how I generated more than 100,000 pesos income a month</b> on my online grocery business <u>using the eCommerce Website</u> I'll be including in the training! That you could also do or <b>pwedeng mahigitan</b> pa if you run this kind of business.
            <br /><br />

            <center><img src={BuyingCustomer} alt="Buying Customer" width="70%" /></center>
            <br />

            Right now I already have 420 customers buying regularly in my online grocery business.
            <br /><br />

            Each of them is buying an <span style={{ color: "blue" }}>average amount of Php 3,000 worth of grocery items</span> per month, my percentage earnings for this is 10% so computing it will give...
            <br /><br />

            <b>Php 3,000 x 420 x 10% = Php 126,000/mo</b>
            <br /><br />

            <center><img src={Order18000} alt="18000 order" width="70%" /></center>
            <br />

            Well, that's a rough estimate. Minsan pa nga umaabot ng 18,000 pesos yung order ng isa kong customer.
            <br /><br />

            <center><img src={Order28000} alt="28000 order" width="70%" /></center>
            <br />

            At yung mga students ko na gumagawa na rin ng online grocery ay umaabot naman ng 28k ang isang order.
            <br /><br />

            <b>Php 28,000 x 420 x 10% = Php 1,176,000/mo</b>
            <br /><br />

            At yung iba <u style={{ color: "#0096FF" }}>hindi naman once a month lang bumibili</u>, merong din iba once a week. Meron ngang iba once every other day eh gaya ng mga merong restaurant or karenderya. Halos araw-araw pa yan bumubili.
            <br /><br />

            And what makes it more profitable is that you can get more than 420 customers because of the <span style={{ color: "red" }}>emerging Marketing Strategy</span> I am going to show to you on the training.
            <br /><br />

            <center><h2 style={{color: "green"}}>Here's A Golden Opportunity For You</h2></center>
            <br />

            You can now start an online grocery business in just a few days! HOW??? Just allow me to <b><u>teach you for 5 straight calendar days</u></b> all the knowledge, skills, and marketing... Then <span style={{ color: "red" }}>you can have an online grocery business ready for operation</span>.
            <br /><br />

            <b style={{ color: "#0096FF" }}>Why am I 100% sure about that?</b>
            <br /><br />

            This is because I will going to <u style={{color: "#D2042D"}}>Teach You</u>  how to do it in a <b style={{color: "#D2042D"}}>Workshop Format</b>.  <b>What do I mean with that?</b> <b>Workshop</b> is a different type of training wherein you will engage in an <span style={{color: "#D2042D"}}>intensive discussion</span> and must follow all the activity I'll be giving you on this program.
            <br /><br />

            In short, hindi ka pwedeng magtapos sa workshop kung wala kang <span style={{color: "red"}}>successful and fully operational</span> na <u>Online Grocery Business</u>. <b style={{color: "red"}}>Not only that, I will also help you build your first 420 buying customers and make 100,000 pesos sales per month or more!</b>
            <br /><br />

            <div style={{border: "1px solid red", padding: 10}}><i>But note that this is not a get rich quick scheme type of business and I only worked with serious people who are looking for a legitimate way to establish business online by selling grocery products. If you are willing to take the action needed to establish this business then this is right for you.</i></div>
            <br />

            The great news now is that instead of preparing it in 1 year or more like what I did, <b style={{color: "green"}}>you can begin your online grocery in just a few days</b> <i>(it depends on how fast you learn and act)</i> without the painful mistakes just like what I've encountered.
            <br /><br />

            And instead of canvassing the cheapest website creator, not anymore for you now because <b style={{color: "green"}}>I'll be giving you an <span style={{color: "red"}}>Ecommerce Website</span> and a <u>free labor in uploading grocery items into it</u></b>.
            <br /><br />

            This e-commerce website is the <b><u style={{color: "red"}}>fully upgraded version</u></b>, it cost around 28,000 pesos if you purchase it separately or more if you hire someone make it but not this time because <u style={{color: "green"}}>I'll be giving you that absolutely free</u>.
            <br /><br />

            All you need to do is to pay its monthly hosting fee!
            <br /><br />

            Aside from the ecommerce website, you also don't need to go to a supermarket to collect all the data of the grocery items, automatically the e-commerce website you'll be getting <b style={{ color: "#0096FF" }}>will contain all the fast moving grocery products in the Philippines</b>.
            <br /><br />

            So <u>it doesn't matter if you're good in computer or not</u>, you can start the business right away!
            <br /><br />

            Allow me to introduce to you to the country's first workshop on how to build an online grocery business called...
            <br /><br />

            <center><img src={OgpaWorkshop} alt="OGPA Workshop" width="50%" /></center>
            <br />

            My students usually called it in its abbreviation form, <b style={{color: "green"}}>OGPA</b> workshop.
            <br /><br />

            In this workshop, you will be receiving <u>5 (Five) exclusive lessons</u> that will intensively teach you how to build online grocery business. While on the workshop, you will be receiving a <u style={{color: "green"}}>Free Fully Upgraded Ecommerce Website</u> and we will be the one who <u style={{color: "#D2042D"}}>will do the uploading of grocery items into it</u>.
            <br /><br />

            <b style={{color: "red"}}>... so you can start the business right away!</b>
            <br /><br />

            <b style={{color: "green"}}>And remember you only need to have at least 420 buying customers to make a lot of sales in this business.</b>
            <br /><br />

            I forgot to tell you that mostly, those <u>who buy in my online grocery business</u> are <b style={{color: "green"}}>OFWs</b>. They are one of those who are highly needing the service of this business. They always wanted to <u>make sure that their family</u> here in the Philippines have <b><u>food to eat</u></b> instead of just sending them money.
            <br /><br />

            When I do my research, I found out that there are over <b><u>2 million OFWs scattered in over 170 countries</u></b> around the world and in order to make a lot of money in this business... <b style={{color: "#0096FF"}}>You need only 420 of them</b>.
            <br /><br />

            And of course <u>OFWs are not the only people</u> you can serve through this business,
            <br /><br />
            
            <span style={{ color: "red" }}>&#10004;</span> We also have those who are <u style={{ color: "red" }}>opulent individual</u> <i>(mayayamang tao)</i> and <b style={{ color: "#0096FF" }}>those who are busy working in BPO or in a hospital</b>.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> We also have home base professionals.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> Mommies who just gave birth to their child who can't go out of their houses to buy groceries.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> People who are afraid to go out of their houses dahil natatakot mahawaan ng covid, monkeypox at iba pang sakit.
            <br /><br />

            <span style={{ color: "red" }}>&#10004;</span> And a whole lot more!
            <br /><br />

            So if you are worried of competition and saying... <i>"Ay marami ng nag-o-online grocery dito sa amin", "Ay nag-o-online grocery na kasi yung mga supermarket dito then"...</i>
            <br /><br />

            <center><h2 style={{color: "red"}}>STOP!</h2></center>
            <br />

            <b style={{color: "green"}}>Remember that sobra sa 100 million ang population natin pero 420 ka tao lang ang kailangan mo</b>.
            <br /><br />

            OFW pa nga lang na 2 million ay napakarami na! Kahit nga <u>isang subdivision or isang condo</u> lang ang customer mo ay kuhang-kuha na ang target income na yun. And be excited because I'm going to teach you in OGPA workshop how to find exactly these people.
            <br /><br />

            <center><h2 style={{color: "green"}}>What Can You Get In The OGPA Workshop?</h2></center>
            <br />

            Ok let me discuss to you the schedule of our workshop. The program will actually happen in Two Weeks. On the first weeks, we will be building your Online Grocery Website before we go diving on your 5 Days Workshop.
            <br /><br />

            All you need to do on that week is to send me a request advising me to setup your website and start uploading grocery items into it. This will ensure that even before your first day of workshop, you have an operational and an active  Online Grocery Ecommerce Website. In fact, once you have the website you can immediately start accepting orders even before the first day of your workshop!
            <br /><br />

            On Monday of the second week, we shall then start the proper intensive training.
            <br /><br />
                        
            Here's the detailed information on what you'll be getting on the program…
            <br /><br />

            <div className={isMobile ? "" : "d-flex justify-content-center"}>
                <div style={{...schedContainer, width: isMobile ? "100%" : "20%"}}>
                    <div style={schedHeading}>
                        Monday 6AM<br/> (1st Week)
                    </div>
                    <div style={schedBody}>
                        Sign up request form for us to start building your website. 
                    </div>
                </div>
                <div style={{...schedContainer, width: isMobile ? "100%" : "60%"}}>
                    <div style={schedHeading}>
                        Tuesday - Friday<br/> (1st Week)
                    </div>
                    <div style={schedBody}>
                        Sit back and relax while you wait for your website to be setup. 
                    </div>
                </div>
                <div style={{...schedContainer, width: isMobile ? "100%" : "20%"}}>
                    <div style={schedHeading}>
                        Saturday or Sunday<br/> (1st Week)
                    </div>
                    <div style={schedBody}>
                        You should have a website on these days.
                    </div>
                </div>
            </div>

            <div className={isMobile ? "" : "d-flex justify-content-center"}>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 1 Monday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        Familiarizing your Website’s User Interface and how you can turn it into a Customer Attraction Focus website so you can have a lot of customers and transforming them from first time buyer into a repetitive buyer.
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 2 Tuesday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        You’ll discover how to maximize profitability by placing the right prices of your grocery products. You will also learn how to make people buy more from you instead of that in your competitor or in the supermarket.
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 3 Wednesday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        You’ll learn where and how to get regular customers from different people on social media.
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 4 Thursday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        The website you’ll be getting was not merely design for grocery only. On this session, I’ll show you where and how to get other products that you can sell on your website on top of grocery products. This way… You’ll earn much more!
                    </div>
                </div>
                <div style={schedContainer}>
                    <div style={schedHeading}>
                        SESSION 5 Friday 6AM<br/> (2nd Week)
                    </div>
                    <div style={schedBody}>
                        You’ll learn the fastest way to earn your first million thru the right and latest techniques to acquire lots of customers.
                    </div>
                </div>
            </div>
            <br />

            Although these lessons will be sent to you via email at 6AM per day but since these are all recorded videos, you can watch the lessons anytime of the day when you are already vacant.
            <br /><br />
            
            <div style={{...schedContainer, width: "100%"}}>
                <div style={schedHeading}>
                    Every Sunday at 8PM (Live Q and A Session)
                </div>
                <div style={schedBody}>
                    Every Sunday at 8PM we will do a 15 Minute Presentation, 1 Hour Website Checking, and 1 Hour Q And A Session. Videos are also recorded for those who can't attend. 
                </div>
            </div>
            <br />

            <b>Q: What if I am busy? How can I attend the workshop?</b>
            <br /><br />

            Answer: All the instructions are being sent to you with a recorded videos and these lessons will be sent every 6 AM each day so you'll have enough time to watch it. Also, if you cannot attend the Live Q and A session, I will also send you a recorded copy of it.
            <br /><br />

            <b>But Francis, I'm New To This Kind Of Business</b>
            <br /><br />

            Don't worry. Online Grocery Prosperity and Abundance Workshop (OGPA) is great for beginners in online business like you. I'll take you by the hand and guide you so you can start making money on your online grocery in 5 days or less.
            <br /><br />

            Most of my students are new to online grocery business. They never made any money online prior to joining my workshop. But, in just few weeks after the class, they're now making money.
            <br /><br />

            <center><h2 style={{color: "green"}}>How Much Is This Workshop?</h2></center>
            <br />

            By now, you must be excited to enroll in this <b>premier workshop and start making serious money online</b>. But before I jump into the details, let's compare first a traditional business like a physical grocery store vs. an online grocery business that I'm sharing to you.
            <br /><br />

            First, in a physical grocery store, you'll need a minimum of 1 Million pesos for the building cost. Second, you'll need an initial stock worth P500,000. At kung gusto mo sa magandang location, yung matao like yung malapit sa market, expect an additional P75,000 per month and a P225,000 for three months security deposit.
            <br /><br />

            In total, you'll need at least P1,725,000 to start a grocery outlet business. <u>Initial expense pa lang yan ha, wala pang monthly operational expenses tulad ng bayad sa tubig at kuryente</u>. No doubt, it requires you to invest a lot of money at mahirap pang humanap ng empleyado na mapagkakatiwalaan mo. <u>Yung hindi ka kukupitan, lolokohin, at lalayasan</u>.
            <br /><br />

            Fact is, not many Pinoys have P1,725,000 savings to invest in a physical grocery business. Napakalaking halaga niyan.
            <br /><br />

            On the other hand, I can <u>teach you how to start an online grocery business</u> that you can run part-time from home and can give you P50,000, P100,000, or even P1 Million per month of income. But I will not ask you to invest P1,725,000 as enrollment fee, that's a very big amount. Not even half of that which is P850,000, or P250,000.
            <br /><br />

            On the contrary, if you build an online grocery business on your own (without attending the OGPA Workshop).
            <br /><br />

            <span style={{ color: "purple" }}>"You will need to hire a website programmer to create an ecommerce website for you. It would need at least P100,000. This includes professional fee, 1 year web hosting, and maintenance fee</span>.
            <br /><br />

            Aside from that, you will also need to hire somebody to go to the nearest supermarket or grocery store to list all the grocery items (name, price, SKU, etc. Even the pictures). That will cost you another 20,000 pesos for the labor. All in all you would need P120,000 for the website and uploading of grocery items to establish an online grocery business on your own. That is still a pretty huge amount!
            <br /><br />

            However, to attend in <b style={{ color: "green" }}>Online Grocery Prosperity and Abundance Workshop</b> (which includes the website and uploading of grocery items), the enrollment fee is just a onetime payment of 9,890. That's a little investment compared to what you’ll need in starting a high-risk business like a physical grocery outlet.
            <br /><br />

            Remember, <u>I'll train you in a one on one mentoring and you will have priority Facebook or email access to me during the workshop</u> especially on the Q and A sessions. Plus, you'll also get access to my private Facebook group where you'll receive a <b>LIFETIME support from our growing community of online grocery owners</b>.
            <br /><br />

            Oh by the way, I may also <b style={{color: "red"}}>give big discounts to people who will enroll into this workshop earlier</b>. See if there is discount today by continuing reading this up to the end. Now aside from the discount that I'll be giving you when you watch this whole video and after enrolling on this workshop, you will also be receiving this amazing bonuses:
            <br /><br />

            <b>But Wait...</b>
            <br /><br />

            Operating your online grocery business also means you need to keep monitoring your grocery prices and have it updated regularly.
            <br /><br />

            When I was starting, I lost enormous amount of money because I am not constantly updating prices in some of my grocery products. Minsan pa nga, nalulugi ako kasi yung presyo na binayad ng customer ay ang presyo nung hindi pa updated ang price. Yung mababa pa lang!
            <br /><br />

            But if you are the first 20 person who will take action and enroll OGPA Workshop right now, you are entitled to our <b style={{color: "green"}}>Price Change Monitoring Program (PCMP)</b>
            <br /><br />

            Instead of you who keeps monitoring the prices, we will do it for you and we will automatically update it into your website!!!
            <br /><br />

            But take note that exclusive lang itong Price Change Monitoring Program sa first 20 person who will go through the workshop. Right now, there are already {spotTaken} people that jump in to this program. So, {spotLeft} spots nalang yung natitita. Once all the spot have been taken or until midnight of Sunday, whichever comes first, we will end the enrollment for the program. So you need to hurry  and decide to enroll NOW!!!
            <br /><br />

            {showInitButton && <>
                <div align="center">
                    <span style={{color: "red"}}>Click the BUTTON below to Enroll NOW!!!</span>
                    <br /><br />

                    <button
                        type="button"
                        className="btn-primary btn-lg"
                        style={{ fontSize: isMobile ? 18 : 30, padding: isMobile ? "15px 40px" : "15px 80px", marginBottom: 20 }}
                        onClick={() => handleButtonClick()}
                    >
                        Click Here To ENROLL Now <RightCircleOutlined />
                    </button>
                </div><br />
            </>}
            
            A much more discount may be available for early enrolment!!! One more thing, to make this deal even sweeter for you I'm also giving you a…
            <br /><br />

            <center><img src={MoneyBackGuarantee} alt="Money Back Guarantee" width={isMobile ? "100%" : ""} /></center>
            <br />

            How would you know if the workshop is right for you? You try it and see for yourself right? And this is what I'm offering you right now.
            <br /><br />

            This is how it works…
            <br /><br />

            Enroll in this workshop and then attend our first session. If you're not happy with it, for whatever reason (kahit di mo lang trip boses ko), just email me before the second day of the training and I will give you a FULL refund.
            <br /><br />

            <b>No questions asked. No hard feelings. Friends pa din tayo.</b>
            <br /><br />

            I'm sure you'll agree that not many trainings or programs can give you a money back guarantee. Why? Because many people can claim they can teach you how to create an online store business but only few can back it up with actual income results.
            <br /><br />

            Modesty aside, I sold over 1 Million Pesos of grocery products in the last 12 months operating my own online grocery business. And I have lots of students that can attest to how my mentoring program abled them to do exactly the same way too.
            <br /><br />

            That's why <b>I have the "guts" to offer you a 100% money back guarantee</b>. If you decided to back out before our 2nd session, send me your bank account information and I'll deposit the full refund to your bank account.
            <br /><br />

            Or if you enrolled with your credit card I will credit it back to you in 3-5 business days (refund processing cost for card payments may apply).
            <br /><br />

            <b style={{ color: "purple" }}>You won't find any better deal than this.</b>
            <br /><br />

            But wait, I am not finish yet! Here's the craziest deal that you won't find anywhere else because I'm also giving you an...
            <br /><br />

            <center><img src={ActoionTakerGuarantee} alt="Actoion Taker Guarantee" style={{width: "70%"}} /></center>
            <br />

            Now this is how it works.
            <br /><br />

            Enroll in this workshop and then go through all the sessions
            <br /><br />

            <b><u>If you have gone through all these (completed the 5 days workshop, attended the Live Q and A Session) and follow all the instructions I have provided in the workshop but after 45 days from your first lesson you wont get any single sale,</u></b>
            <br /><br />

            I will refund you 100% of  what you pay within 3 days!
            <br /><br />

            Yes!  That's how confident I am that if you really follow all the instructions I'll give you on the training, I can guarantee that you will earn a lot of money.
            <br /><br />

            <b style={{color: "red"}}>Note: You need to exactly follow all my instructions in the 5 sessions, attended the Live Q and A and if you can provide me proof that you did all the instructions there but did not have a single sale after 45 days, then I'll refund you all of what you pay now in the next 3 days.</b>
            <br /><br />

            Isn't that an extra ordinary deal? You won't find any deal like that to other offer!
            <br /><br />

            <b>Question... Meron na bang successfully nakapag-parefund after 45 days?</b>
            <br /><br />

            <b style={{color: "blue"}}>Sagot... WALA.</b>   Dahil lahat ng nag-undergo ng workshop na to na ginawa ang lahat ng mga pinapapagawa ko ay nagkaroon talaga ng maraming sales!
            <br /><br />

            And now they are successfully operating their online grocery business and continually earning multiple figure income a month because they exactly follow all the things they have learned on the workshop.
            <br /><br />

            Alright, I guess you have all the things you wanted to hear from this program. Nothing more to lose to enroll now! All you need to do is grab your spot by clicking the button below to register as there are only limited people we can accept on this workshop.
            <br /><br />

            {showInitButton && <>
                <div align="center">
                    <span style={{color: "red"}}>Click the BUTTON below to Enroll NOW!!!</span>
                    <br /><br />

                    <button
                        type="button"
                        className="btn-primary btn-lg"
                        style={{ fontSize: isMobile ? 18 : 30, padding: isMobile ? "15px 40px" : "15px 80px", marginBottom: 20 }}
                        onClick={() => handleButtonClick()}
                    >
                        Click Here To ENROLL Now <RightCircleOutlined />
                    </button>
                </div><br />
            </>}

            <b>Oh by the way...</b>
            <br /><br />

            <span>If you enroll in the workshop today or until 20 spots have been taken, you can avail a very big discount!!!</span>
            <br /><br />

            So, from P9,890 enrollment fee, you can now pay for…
            <br /><br />

            <b>Only ₱{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}!</b>
            <br /><br />

            <b>A very huge that is almost 70% discount!</b>
            <br /><br />

            And… Ito pa, aside from the 70% discount, we will also <u>waive your first 3 months</u> of the monthly hosting fee for the website!
            <br /><br />

            YES!... To enroll in OGPA Workshop now, you only need to pay {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} pesos as a registration fee (this includes the one time setup fee for your website). 
            <br /><br />

            Plus, you will only start paying your monthly hosting fee for the website on the fourth month!
            <br /><br />

            So hurry! You have to act now because if more and more people will going to get inside this program, we will be bringing it back to its original price!
        </div>
    );
}
 
export default SalesContent;