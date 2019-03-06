@extends('layouts.prelander', compact('campaign', 'prelander'))

@section('content')
    <christina-facebook language="{{ strtolower($campaign->getLocaleCode()) }}"
                        api-endpoint="{{ route('client.register') }}"
                        campaign-root="{{ $campaign->getDomain() }}"
                        minutes="15"
                        :footer-links="{{ json_encode($campaign->getPages()) }}"
                        type-speed="{{ request('speed', 20) }}"
                        avatar-dir="/christina-ritual/img/default/avatar.png"
                        header-dir="/amanda-uk2018/chatbox/images/chat/voyance_header_online.png"
                        offline-dir="/amanda-uk2018/chatbox/images/chat/voyance_header_offline.png"
                        name-image-dir="/amanda-uk2018/chatbox/images/chat/voyance_amanda_text_en_AU.png"
                        disabled-button-image="/amanda-uk2018/chatbox/images/chat/button_go_grijs.png"
                        button-image="/amanda-uk2018/chatbox/images/chat/button_go.png"
                        :prelander-id="{{ $prelander->getId() }}"
                        :campaign-id="{{ $campaign->getId() }}"
                        :request="{{ json_encode(request()->only(['t', 'o', 'affiliate_id', 'aff_sub1', 'aff_sub2', 'aff_sub3', 'aff_sub4'])) }}"
                        medium-name="{{ $campaign->getMediumName() }}"
    ></christina-facebook>
@endsection




