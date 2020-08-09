from twitter_api.getStatusApi import *

def get_content(status_id: int):
    resp = get_status(status_id)
    content_data = get_content_data(resp['_json'])
    thumbnail_img = content_data['media_url_https']
    size_dict = create_size_map(content_data)
    return {
        'thumbnail': thumbnail_img,
        'variants': size_dict
    }

def create_size_map(content_data: dict) -> dict:
    size_map = {}
    for variant in content_data['video_info']['variants']:
        if 'video' not in variant['content_type']:
            continue
        dimension = "x"
        if dimension in variant['url']:
            dimension = variant['url'].split("/")[7]
        size_map[dimension] = {
            'url': variant['url'],
            'content_type': variant['content_type']
        }
    return size_map