async function(properties, context) {
    const basic_type = [
        'text',
        'number',
        'numeric_range',
        'date',
        'date_range',
        'date_interval',
        'boolean',
        'file',
        'image',
        'geographic_address'
    ];

    if (basic_type.includes(properties?.variable_type)) {
        return { value: properties?.variable ?? null };
    }

    return { value: properties?.variable?._pointer?._id ?? null };
}