async function loadStructuredData() {
  try {
    const response = await fetch('/structured-data.json');
    const data = await response.json();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  } catch (error) {
    console.error('Error loading structured data:', error);
  }
}