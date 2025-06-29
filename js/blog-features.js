// Blog Features JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Reading Progress Indicator
  function initReadingProgress() {
    const progressBar = document.createElement("div");
    progressBar.className = "reading-progress";
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.appendChild(progressBar);

    const progressBarInner = progressBar.querySelector(".reading-progress-bar");

    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBarInner.style.width = scrollPercent + "%";
    });
  }

  // Social Sharing
  function initSocialSharing() {
    const shareButtons = document.querySelectorAll(".share-btn");

    shareButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const platform = this.getAttribute("data-platform");
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(document.title);
        const text = encodeURIComponent(
          "Check out this great article on digital parenting!",
        );

        let shareUrl = "";

        switch (platform) {
          case "facebook":
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
          case "twitter":
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
            break;
          case "linkedin":
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
          case "whatsapp":
            shareUrl = `https://wa.me/?text=${text}%20${url}`;
            break;
          case "email":
            shareUrl = `mailto:?subject=${title}&body=${text}%20${url}`;
            break;
        }

        if (shareUrl) {
          window.open(shareUrl, "_blank", "width=600,height=400");
        }
      });
    });
  }

  // Comment Functionality
  function initCommentSystem() {
    const commentForm = document.querySelector(".comment-form");

    if (commentForm) {
      commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const textarea = this.querySelector("textarea");
        const comment = textarea.value.trim();

        if (comment) {
          addComment(comment);
          textarea.value = "";
          showNotification("Comment posted successfully!", "success");
        } else {
          showNotification("Please enter a comment.", "error");
        }
      });
    }
  }

  function addComment(text) {
    const commentsContainer = document.querySelector(".comments");
    const newComment = document.createElement("div");
    newComment.className = "comment";

    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    newComment.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">You</span>
                <span class="comment-date">${currentDate}</span>
            </div>
            <p>${text}</p>
        `;

    commentsContainer.insertBefore(newComment, commentsContainer.firstChild);

    // Update comment count
    const commentCount = document.querySelector(".comments-section h3");
    const currentCount = parseInt(commentCount.textContent.match(/\d+/)[0]);
    commentCount.textContent = `Comments (${currentCount + 1})`;
  }

  // Like/Bookmark System
  function initLikeSystem() {
    const likeButtons = document.querySelectorAll(".like-btn, .bookmark-btn");

    likeButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();

        const isLiked = this.classList.contains("liked");
        const isBookmarked = this.classList.contains("bookmarked");

        if (this.classList.contains("like-btn")) {
          this.classList.toggle("liked");
          const count = this.querySelector(".count");
          if (count) {
            const currentCount = parseInt(count.textContent);
            count.textContent = isLiked ? currentCount - 1 : currentCount + 1;
          }
          showNotification(isLiked ? "Removed from likes" : "Added to likes");
        } else if (this.classList.contains("bookmark-btn")) {
          this.classList.toggle("bookmarked");
          showNotification(
            isBookmarked ? "Removed from bookmarks" : "Added to bookmarks",
          );
        }
      });
    });
  }

  // Notification System
  function showNotification(message, type = "info") {
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Initialize all features
  initReadingProgress();
  initSocialSharing();
  initCommentSystem();
  initLikeSystem();
});
