

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
        <p>Your article preview here...</p>
      `,
      link: "https://theangrydaughter.substack.com/p/i-am-not-proud"
    },

    {
      title: "the bittersweet feeling of coming home",
      subtitle: "The anxiety that boarded the plane home with me",
      date: "1 Aug 2025",
      content: `
        <p>Your article preview here...</p>
      `,
      link: "https://theangrydaughter.substack.com/p/the-bittersweet-feeling-of-coming"
    },

    {
      title: "what i've been getting wrong about love",
      subtitle: "on friendships and romance",
      date: "06 Feb 2026",
      content: `
        <p>Your article preview here...</p>
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
