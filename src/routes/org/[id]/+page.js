export async function load({ params, parent }) {
    const { organizations } = await parent();
    const organization = organizations.find(org => org.id === params.id);
    
    return {
        organization: organization || null
    };
}
