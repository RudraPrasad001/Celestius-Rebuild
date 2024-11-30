document.addEventListener("DOMContentLoaded", () => {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  entry.target.classList.add('in-view');
		  return;
		}
	  });
	});
	const allAnimatedElements = document.querySelectorAll('.animate');
	allAnimatedElements.forEach((element) => observer.observe(element));

}); 