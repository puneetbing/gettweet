def get_status(status_id: int) -> dict:
    from twitter_api.setInstance import api_instance
    resp = api_instance.get_status(status_id, tweet_mode='extended')
    return resp.__dict__

def get_content_data(response_dict: dict) -> dict:
    # print(response_dict)
    if 'quoted_status' in response_dict and 'extended_entities' in response_dict['quoted_status']:
        response_dict = response_dict['quoted_status']
    return response_dict['extended_entities']['media'][0]