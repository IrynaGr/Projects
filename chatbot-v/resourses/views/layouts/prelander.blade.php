
<?php
/**
 * @var \Fortel\MailingApiClient\Http\Responses\Campaign\CampaignDataForClientResponse $campaign
 * @var \Fortel\MailingApiClient\DTO\CampaignPrelander $prelander
 */
?>
<!DOCTYPE html>
<html lang="{{ strtolower($campaign->getLocaleCode()) }}">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="prelander-id" content="{{ $prelander->getId() }}">
    <meta name="campaign-id" content="{{ $campaign->getId() }}">
    <meta name="name" content="">
    <meta name="locale" content="{{ strtolower($campaign->getCountry()) }}">
    <meta name="dateofbirth" content="">
    <meta name="phone" content="">
    <meta name="email" content="@isset($user){{ $user->getData('email') }}@endisset">
    <meta name="socket-domain" content="{{ config('services.ivr.socket_url') }}">
    <meta name="name" content="@isset($user){{ $user->getData('contact.first_name') }}@endisset">
    <meta name="description" content="{{ $campaign->getDescription() }}"/>
    <meta name="keywords" content="{{ $campaign->getMediumName() }}"/>
    <title>
        {{ $campaign->getMediumName() }}
    </title>
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/css/bootstrap.min.3.3.6.css') }}" rel="stylesheet"/>
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/css/toolkit-startup.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/css/website.css') }}" rel="stylesheet">
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/css/common.css') }}" rel="stylesheet"/>
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/css/prelander.css') }}" rel="stylesheet"/>
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/css/font-awesome.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/amanda-fr-starting-2018/chatbox/themes/amanda/style.css') }}" rel="stylesheet">
    <link href="{{ asset('/christina-fb/css/style.css') }}" rel="stylesheet">
    <link href="{{ asset('/christina-fb/css/common.css') }}" rel="stylesheet">
    <link href="{{ asset('/christina-fb/css/popup.css') }}" rel="stylesheet">

</head>
<body>
    <div id="app">
        @yield('content')
    </div>

    <!-- JavaScript -->
    <script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
