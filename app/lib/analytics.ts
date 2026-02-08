function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
}

function sendToSupabase(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;

  const payload = JSON.stringify({
    event_name: eventName,
    event_params: params || {},
    page_path: window.location.pathname,
    session_id: getSessionId(),
    referrer: document.referrer || '',
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/track', new Blob([payload], { type: 'application/json' }));
  } else {
    fetch('/api/track', { method: 'POST', body: payload, keepalive: true }).catch(() => {});
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === 'undefined') return;

  // GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Supabase
  sendToSupabase(eventName, params);
}

// CTA click tracking
export function trackCTAClick(buttonName: string, page: string) {
  trackEvent('cta_click', {
    button_name: buttonName,
    page_location: page,
  });
}

// Popup tracking
export function trackPopupOpen(popupName: string) {
  trackEvent('popup_open', {
    popup_name: popupName,
  });
}

export function trackPopupClose(popupName: string) {
  trackEvent('popup_close', {
    popup_name: popupName,
  });
}

// Form tracking
export function trackFormSubmit(formName: string) {
  trackEvent('form_submit', {
    form_name: formName,
  });
}

// Video tracking
export function trackVideoPlay(videoTitle: string) {
  trackEvent('video_play', {
    video_title: videoTitle,
  });
}

// Scroll depth tracking
export function trackScrollDepth(depth: number, page: string) {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page_location: page,
  });
}

// Outbound link tracking
export function trackOutboundLink(url: string) {
  trackEvent('outbound_click', {
    link_url: url,
  });
}
