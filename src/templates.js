/** @type {Required<ResumeSchemaLegacy>} */
export const resumeJsonTemplateLegacy = {
    basics: {
        name: '',
        firstName: '',
        lastName: '',
        member_id: '',
        label: '',
        picture: '',
        email: '',
        phone: '',
        website: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    references: []
};

/** @type {Required<ResumeSchemaStable>} */
export const resumeJsonTemplateStable = {
    // $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
        name: '',
        firstName: '',
        lastName: '',
        member_id: '',
        label: '',
        image: '',
        email: '',
        phone: '',
        url: '',
        summary: '',
        location: {
            address: '',
            postalCode: '',
            city: '',
            countryCode: '',
            region: ''
        },
        profiles: []
    },
    work: [],
    volunteer: [],
    education: [],
    awards: [],
    certificates: [],
    publications: [],
    skills: [],
    languages: [],
    interests: [],
    phone_1: '',
    phone_type_1: '',
    phone_2: '',
    phone_type_2: '',
    messenger_1: '',
    messenger_provider_1: '',
    messenger_2: '',
    messenger_provider_2: '',
    references: [],
    projects: []
    // meta: {
    //     version: 'v1.0.0',
    //     canonical: 'https://github.com/jsonresume/resume-schema/blob/v1.0.0/schema.json'
    // }
};

/**
 * Beta can be combined with latest, so this is a partial (diff)
 * Currently even with 1.0
 * @type {Partial<ResumeSchemaBeyondSpec>}
 */
export const resumeJsonTemplateBetaPartial = {};
