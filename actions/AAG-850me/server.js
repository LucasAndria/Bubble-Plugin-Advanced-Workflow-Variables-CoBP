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

    const pointer = properties?.variable?._pointer;
    if (Array.isArray(pointer)) {
        return {
            value: pointer.map(v => v?.val?._id).filter(id => id != null)
        };
    }

    return { value: [] };
}