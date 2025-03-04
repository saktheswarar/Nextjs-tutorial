import properties from '@/properties.json';

const PropertiesPage = ({ params, searchParams }) => {
    return (
        <div>
            <h1>Properties Page</h1>
            {properties.length === 0 ? (
                <p>No properties found</p>
            ) : (
                <ul>
                    {properties.map((property) => (
                        <li key={property._id}>{property._id}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PropertiesPage;
