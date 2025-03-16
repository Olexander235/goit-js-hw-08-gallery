const galleryItems = [
   {
     preview: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
     original: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
     description: "Tulips",
   },
  
   
   {
     preview: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
     original: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
     description: "Lonely Tree",
   },
   
   {
     preview: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg",
     original: "https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg",
     description: "Green Avenue",
   },

   {
     preview: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828__340.jpg",
     original: "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg",
     description: "Golden Trees",
   },
   {
     preview: "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667__340.jpg",
     original: "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg",
     description: "Oak Tree",
   },
   {
      preview: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
     original: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
     description: "Tul"
    }
 ];
 
 
 const galleryContainer = document.querySelector(".js-gallery");
 const modal = document.querySelector(".js-lightbox");
 const modalImage = document.querySelector(".lightbox__image");
 const closeButton = document.querySelector("[data-action='close-lightbox']");
 const overlay = document.querySelector(".lightbox__overlay");
 
 // 1. Создание разметки галереи
 const galleryMarkup = galleryItems
   .map(({ preview, original, description }) => {
     return `
       <li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
         </a>
       </li>`;
   })
   .join("");
 
 galleryContainer.innerHTML = galleryMarkup;
 
 // 2. Делегирование событий
 const openModal = (event) => {
   event.preventDefault();
   if (event.target.nodeName !== "IMG") return;
   
   modal.classList.add("is-open");
   modalImage.src = event.target.dataset.source;
   modalImage.alt = event.target.alt;
   
   window.addEventListener("keydown", onEscPress);
 };
 
 galleryContainer.addEventListener("click", openModal);
 
 // 3. Закрытие модального окна
 const closeModal = () => {
   modal.classList.remove("is-open");
   modalImage.src = "";
   modalImage.alt = "";
   
   window.removeEventListener("keydown", onEscPress);
 };
 
 closeButton.addEventListener("click", closeModal);
 overlay.addEventListener("click", closeModal);
 
 const onEscPress = (event) => {
   if (event.key === "Escape") closeModal();
 };
 