// +layout.js
export const prerender = true;

export async function load({ fetch }) {
    const response = await fetch('/data.json');
    const data = await response.json();
    
    // Spread the data so keys like 'organizations' 
    // are top-level in your components
    return { ...data }; 
}