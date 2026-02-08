// +layout.js
export const prerender = true;

export async function load({ fetch }) {
    const response = await fetch('/data.json');
    const data = await response.json();
    
    return {
        organizations: data.organizations || [],
        events: data.events || [],
        locations: data.locations || [],
        meta: data.meta || {}
    }; 
}
