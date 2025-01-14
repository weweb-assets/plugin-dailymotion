export default {
    editor: {
        designSystemId: '25bb9f5e-99a5-4a21-be2e-b56265867ab3',
    },
    actions: {
        /* wwEditor:start */
        getVideoInfo: {
            copilot: {
                description: 'Get information about a Dailymotion video',
                returns: 'object',
                schema: {
                    videoId: {
                        type: 'string',
                        description: 'The ID of the Dailymotion video',
                        bindable: true
                    }
                }
            }
        },
        getVideoStatus: {
            copilot: {
                description: 'Get the current status of a Dailymotion video',
                returns: 'string',
                schema: {
                    videoId: {
                        type: 'string',
                        description: 'The ID of the Dailymotion video',
                        bindable: true
                    }
                }
            }
        },
        getVideoThumbnail: {
            copilot: {
                description: 'Get the thumbnail URL of a Dailymotion video',
                returns: 'string',
                schema: {
                    videoId: {
                        type: 'string',
                        description: 'The ID of the Dailymotion video',
                        bindable: true
                    },
                    size: {
                        type: 'string',
                        description: 'The size of the thumbnail (small, medium, large)',
                        bindable: true
                    }
                }
            }
        }
        /* wwEditor:end */
    }
};