

// //scroll to top mybutton
// // modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
// window.onload = function()
// {
//   //Get the button
//   var mybutton = document.getElementById("myBtn");
//   // When the user scrolls down 20px from the top of the document, show the button
//   window.onscroll = function() {scrollFunction(mybutton)};
// }
//
// // nav bar
// function myFunction()
// {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav")
//   {
//     x.className += " responsive";
//   }
//   else
//   {
//     x.className = "topnav";
//   }
// }
//
// //scroll to top mybutton
// // modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
// function scrollFunction(mybutton)
// {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
//   {
//     mybutton.style.display = "block";
//   }
//   else
//   {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// function topFunction()
// {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }




document.addEventListener("DOMContentLoaded", () => {

  const articles = [
    {
      title: "I am not proud.",
      subtitle: "On achieving everything and wanting none of it",
      date: "11 Jun 2025",
      content: `
        <p>Two months ago, I graduated with a first-class honours in computer science. Two weeks ago, I ended my internship at a Fortune 100 company. I’ve won awards throughout my school days, and I have a vibrant life outside of work and studies. I like to believe I am a good daughter, sister, friend, and girlfriend. And deep down, I know I'm a good person even though I doubt it during my lowest moments. But I am here to say that I have nothing to be proud of.
        </p>
        <p>  On paper, I did everything right. I checked every box that is supposed to put you on the path to success and fulfilment. But that is my biggest regret in life because today I wake up feeling lost. Not the kind of loss one would get from failing or rejection, but the kind you get from doing everything you’re expected to, not what you were meant to.
        </p>

        <p>    If you had met me when I was sixteen, you would have thought of me as childish, impulsive, and naive, just like any other teenager. However, you would have also seen an ambitious girl full of fire, even if a little insecure. I had dreams and goals I would have killed to achieve, but all I wanted to do was write – anything. I was always ashamed to admit it out loud, like saying it would strip me bare for the whole world to poke and prod at me and to point out every single one of my flaws. So I spent the rest of my teenage years writing anything and everything in secrecy. Poems, songs, essays, short stories, reports, reviews of books and movies I've watched. Hell, I even wrote a short film. But the moment I turned nineteen, something shifted in me. It felt like something that had already clicked… had perhaps unclicked.
        </p>

        <p>    I, who was once fearless and driven, became cowardly and listless. It felt like my dreams of becoming a writer had vanished overnight. I began dreading the future instead of looking forward to it, and the pandemic only made the fog ahead grow stronger. I saw people lose their jobs. I saw friends drop out of school. I saw people I loved die. And so, without ever really trying, I gave up. I succumbed to my fears and chose the “safest” way out – a degree in a stable field like IT. It's a flourishing industry, there are always new technologies, and there will never be a world without technology. “You can work anywhere in the world, in whatever industry you want, with a degree in CS,” my mom said. Mother knows best, right? So I listened.
        </p>

        <p>  I studied a degree I didn't like at a school I didn't care for. Hoping for an exciting student life, I joined clubs – dance, student council, and cultural societies. I attended my classes, submitted my assignments, showed up for career fairs, and even received awards. I did everything I was supposed to do, but only enough to get by. And even then, I graduated with flying colours. My friends and family told me I should be proud because it's an achievement, and I had worked hard for it. But only I know that I did the bare minimum. Only I know that this degree feels like a curse. As many doors as it has opened for me, it has closed the doors I actually wanted to walk through.
        </p>

        <p>  Sure, we don't always get the life we want. But I refuse to accept that – because I never even tried to fight for the life I wanted. I never tried to make it as a writer. I never tried to write anything worthwhile after my teenage years. I never tried. So how can I be proud of myself when there is nothing to be proud of? How can I be proud of myself when I look in the mirror and don't even recognise the person looking back at me?
        </p>

        <p>  “Why are you complaining? You have so much in your life to be happy about. You are only 23, and it’s not too late to start now,” I can already hear your thoughts reading all of this. And you’re absolutely right. I have nothing to complain about. I live with my family in a stable home. I don't have to worry about getting a job immediately because I'm not strapped for money. I have the most wonderful friends who always have my back, and the most loving boyfriend on earth. I have the time and money to enjoy things like reading, and I am able-bodied to go out and explore the world. For the most part, I do like my life.
        </p>

        <p>  But none of these feel like the fruits of my labour, and so I struggle to enjoy them wholeheartedly.
        </p>

        <p>  Maybe the point of this piece is just for me to vent. Maybe I’m hoping this will lead me somewhere, though I don’t know where that is. The truth is, I feel lost. Every day, I wake up feeling like my life should be amounting to something right now, but I know it isn't. I feel like I haven't done anything worthwhile with my time on earth. But I persevere, hoping that one day I won't feel like this anymore. That one day, when I look in the mirror, I can see my sixteen-year-old self again – happy, driven, fulfilled – and finally be proud of who I am.
      `,
      link: "https://theangrydaughter.substack.com/p/i-am-not-proud"
    },

    {
      title: "the bittersweet feeling of coming home",
      subtitle: "The anxiety that boarded the plane home with me",
      date: "1 Aug 2025",
      content: `

      <p>I have just come back from what felt like a dream - a three-week vacation in the UK. For once, I didn't have to think about any pending school assignments because I am a university graduate. I also didn't have to think about what new work my boss might give me, because I am unemployed. I had the most fun on this trip exploring new places I hadn't even heard of, visiting iconic landmarks I had only dreamt of, staying with friends I hadn't seen in two years, having a drink or two every other night, and eating like there’s no tomorrow. It was the happiest I had been in years, and it felt like the spark I had lost had finally come back.
      </p>

      <p>There is a certain kind of peace that comes with saying, “I have no responsibilities waiting for me” while you’re on vacation. I had to be halfway across the world for home to no longer feel like a source of anxiety. The idea of home felt so comforting to me that I found myself looking forward to coming back. I couldn't wait to get back to my house, my room, my bed, my friends, my boyfriend. And so the day came that I was flying back to Singapore. A three-hour train ride, followed by a seven-hour flight, a five-hour layover, and another seven-hour flight. A full day of travelling, which probably sounds exhausting to most, but I was excited. Excited to make such a long journey all on my own, excited to come home with a suitcase full of gifts and a heart full of stories. Excited to come home to my own space, something I’m sure you would understand if you, too, treasure your alone time.
      </p>

      <p>But the moment I buckled my seatbelt on that first flight, a sense of dread and anxiety settled deep in my chest. I didn’t understand why. I was happy and fulfilled from my vacation. I had been looking forward to going home. I was eager to see my friends and family again. Why would I suddenly dread it now? Was I scared of travelling alone? No, I’ve done that plenty of times. Was I worried something bad might happen? No, it wasn’t that either. It didn't take me long to realise it was because of the impending doom of job hunting.
      </p>

      <p>While being unemployed on vacation meant I could enjoy every moment without worrying about work, I only then realised that it also meant I had nothing “worthwhile” waiting for me. I’ve worked before. Many of my friends are in corporate jobs. My parents have worked my whole life. So it can’t be that bad… right? No, it is that bad.
      </p>

      <p>For someone with my qualifications, finding a job means going back into IT. And the last thing I wanted was a job in IT. I don’t want to sit in front of a computer every day. I don’t want to code. I don't care what the next big software is. And I couldn't care less about AI taking over my IT job because if a robot can do it, then it was never really mine anyway.
      </p>

      <p>I was scared. For the first time in my life, even though it was only for 3 weeks, I felt liberated. I was living a life free of expectations and rules. For the first time in a long time, I felt like myself. Looking for a job and working a 9-to-5 isn’t the worst thing in the world. But the mere thought of doing so tightened my chest and made me breathless. The mere thought of living a life I know I'm not meant for, a life I don't want, tainted the sweetness of coming home with a bitterness so strong, no amount of anything could fight it. There was no way for me to escape this feeling. I had to come back home and face the harsh reality. So I did.
      </p>

      <p>I came back home two weeks ago. In those fourteen days, I've visited my friends and family, shared stories from my vacation, handed out the gifts I brought back, posted some beautiful pictures I took, and gone to sleep every night still replaying what I did on my trip. But in these fourteen days, I’ve also sat and cried, because I don't see a way out of this. I've slept and slept because when I did try to think my way out of this, I just got so, so exhausted. I've kept to myself at home, staying in my room all day, incessantly cleaning and folding laundry because those are the only two things that keep me from thinking about anything serious. And yes, I’ve also applied for jobs. Three, to be precise, because that alone was enough to drain the life out of me.
      </p>

      <p>If I’m being honest, I have no solution. I have no plan moving forward. Am I going to suck it up and continue to look for jobs in IT? Am I going to try to break free from this cage and pursue what I want? Am I going to stall and do nothing at all for as long as I possibly can until the universe forces my hand into something? Or am I just going to let the impending doom of life consume me wholly because maybe there is no way out of this misery?
      </p>

      <p>Not. A. Clue.
      </p>

      <p>But I do know this – I’m meant for something much bigger and much better. Something that will give my life meaning. Something that will make my life feel so fulfilling that it will even make my three-week vacation feel like a speck of dust in the bigger cosmos of it all. While I sit here scared and miserable right now, I know these feelings of uncertainty will eventually melt away into something softer but stronger – something of hope and perseverance. When that day comes, I won't need a vacation to feel like myself again, and home will no longer feel bittersweet. It will finally be where my heart belongs.
      </p>


      `,
      link: "https://theangrydaughter.substack.com/p/the-bittersweet-feeling-of-coming"
    },

    {
      title: "what i've been getting wrong about love",
      subtitle: "on friendships and romance",
      date: "06 Feb 2026",
      content: `
      <p>Last night, my mum’s friend came to visit and stayed the night. She brought my mum some jewellery she’d made herself – three different beaded necklaces in vibrant shades of blue, green, and violet with an interchangeable crescent-shaped metal pendant. She told us about the kind of string she used, the beads she bought, and the time it took her to painstakingly thread the tiny beads with her own two hands.
      </p>

      <p>Amazed, my mum showed her the jewellery she had made in return. Traditional Indian necklaces and earrings, crafted from terracotta clay and strung together using a thin metal wire. They fawned over the other’s creations, giving tips and advice to each other, and even exchanged some of their original pieces.
      </p>

      <p>Watching them, I was reminded of a conversation I’d had with my close friend earlier this year about how she had recently gotten into crocheting. She wanted to make a blanket so we talked about yarn options, and I told her about my go-to shops to buy them. A few weeks after she had fully committed to the craft, we bonded further over how back-breakingly tiring crocheting can be.
      </p>

      <p>Two different friendships, two different generations, four different people. But at the very core of it was one simple yet often complex concept: love. I couldn’t help but wonder if this is what all love feels like.
      </p>

      <p>There is something so quietly tender about friendships that all it takes is a semblance of a commonality to forge a strong bond. Some of my closest friendships began because I wanted to taste a cupcake they had made or because they liked a jacket I wore.
      </p>

      <p>When platonic love can be established so simply and asks for so little, why is it that romantic love demands? I realised that I rarely ask my friends to prove their affection to me. I don’t measure my friendships by grand proclamations of love, but I do find meaning in the effort and small conversations we share. And yet when it comes to romantic love, I find myself wanting more, wanting extravagance.
      </p>

      <p>Maybe this contradiction isn’t accidental. We live in a time that values how love looks over how it feels, prioritising image over substance. A loud, momentary declaration of love has become easier to appreciate than the long hours of work put into building something when no one is watching. Somewhere along the way, I realised that I had been more focused on what love is “supposed to look like” than on what it actually feels like.
      </p>

      <p>This isn’t to say I don’t love romance. I do. I love the thoughtfulness behind someone going out of their way for you, the intimacy in being deeply known, and the beautiful tenderness that comes with being chosen repeatedly. I am, after all, a romantic at heart. But watching my mum and her friend exchange necklaces they had made for each other made me reconsider how I understand love. It reminded me that love is not something to be performed or displayed, but something to be felt quietly and built patiently over time.
      </p>
      `,
      link: "https://theangrydaughter.substack.com/p/what-ive-been-getting-wrong-about"
    }
  ];

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalDate = document.getElementById("modalDate");
  const modalBody = document.getElementById("modalBody");
  const modalLink = document.getElementById("modalLink");
  const closeBtn = document.getElementById("closeBtn");

  const cards = document.querySelectorAll(".writing-pair");

  cards.forEach(card => {

    card.addEventListener("click", () => {

      const id = card.dataset.id;
      const article = articles[id];

      modal.classList.add("show");

      modalTitle.innerText = article.title;
      modalSubtitle.innerText = article.subtitle;
      modalDate.innerText = article.date;
      modalBody.innerHTML = article.content;
      modalLink.href = article.link;

    });

  });

  // CLOSE BUTTON
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // CLICK OUTSIDE
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

  // ESC KEY
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
    }
  });

});
