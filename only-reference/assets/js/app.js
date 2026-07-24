const websites = [
    {
        groupName: 'Aggregators',
        groupType: 'AGGREGATOR',
        chatbots: [
            { name: 'TuskCentral', webURL: 'https://tuskcentral.ai/chat', noLoginNeeded: true },
            { name: 'DuckDuckGo', webURL: 'https://duck.ai' },
            {
                name: 'PI AI',
                webURL: 'https://pi.ai',
                appURL: 'intent://pi.ai/#Intent;scheme=https;package=ai.inflection.pi;end',
            },
            { name: 'Venice AI', webURL: 'https://venice.ai' },
            {
                name: 'Poe',
                webURL: 'https://poe.com/',
                appURL: 'intent://poe.com/#Intent;scheme=https;package=com.poe.android;end',
            },
            { name: 'WebLLM', webURL: 'https://chat.webllm.ai/', noLoginNeeded: true },
            { name: 'HuggingFace Chat', webURL: 'https://huggingface.co/chat/' },
        ],
    },
    {
        groupName: 'Bharat (India)',
        chatbots: [
            {
                name: 'Sarvam',
                webURL: 'https://indus.sarvam.ai/',
                appURL: 'intent://indus.sarvam.ai/#Intent;scheme=https;package=ai.sarvam.indus;end',
            },
            {
                name: 'Atomesus',
                webURL: 'https://atomesus.com/',
                appURL: 'intent://atomesus.com/#Intent;scheme=https;package=com.atomesus;end',
                noLoginNeeded: true,
            },
            {
                name: 'Volkai',
                webURL: 'https://volkai.io/dashboard/',
                appURL: 'intent://volkai.io/#Intent;scheme=https;package=com.volkai.io;end',
            },
        ],
    },
    {
        groupName: 'France',
        chatbots: [
            {
                name: 'Mistral',
                webURL: 'https://chat.mistral.ai',
                appURL: 'intent://chat.mistral.ai/#Intent;scheme=https;package=ai.mistral.chat;end',
                noLoginNeeded: true,
            },
        ],
    },
    {
        groupName: 'China',
        chatbots: [
            {
                name: 'MiniMax',
                webURL: 'https://agent.minimax.io',
                appURL: 'intent://agent.minimax.io/#Intent;scheme=https;package=com.minimax.ai;end',
            },
            {
                name: 'Kimi',
                webURL: 'https://www.kimi.com',
                appURL: 'intent://www.kimi.com/#Intent;scheme=https;package=com.moonshot.kimichat;end',
            },
            {
                name: 'Qwen',
                webURL: 'https://chat.qwen.ai',
                appURL: 'intent://chat.qwen.ai/#Intent;scheme=https;package=ai.qwenlm.chat.android;end',
            },
            {
                name: 'Deepseek',
                webURL: 'https://chat.deepseek.com',
                appURL: 'intent://chat.deepseek.com/#Intent;scheme=https;package=com.deepseek.chat;end',
            },
            { name: 'Zhipu AI', webURL: 'https://chat.z.ai', noLoginNeeded: true },
            { name: 'Longcat', webURL: 'https://longcat.chat', noLoginNeeded: true },
            { name: 'MiMo', webURL: 'https://aistudio.xiaomimimo.com/' },
        ],
    },
    {
        groupName: 'USA',
        chatbots: [
            {
                name: 'Perplexity',
                webURL: 'https://www.perplexity.ai',
                appURL: 'intent://www.perplexity.ai/#Intent;scheme=https;package=ai.perplexity.app.android;end',
                noLoginNeeded: true,
            },
            {
                name: 'Gemini',
                webURL: 'https://gemini.google.com',
                appURL: 'intent://gemini.google.com/#Intent;scheme=https;package=com.google.android.apps.bard;end',
                noLoginNeeded: true,
            },
            {
                name: 'Claude',
                webURL: 'https://claude.ai',
                appURL: 'intent://claude.ai/#Intent;scheme=https;package=com.anthropic.claude;end',
            },
            {
                name: 'Grok',
                webURL: 'https://www.grok.com',
                appURL: 'intent://www.grok.com/#Intent;scheme=https;package=ai.x.grok;end',
            },
            {
                name: 'ChatGPT',
                webURL: 'https://chatgpt.com',
                appURL: 'intent://chatgpt.com/#Intent;scheme=https;package=com.openai.chatgpt;end',
                noLoginNeeded: true,
            },
        ],
    },
    {
        groupName: 'Switzerland',
        chatbots: [{ name: 'Apertus', webURL: 'https://chat.publicai.co/' }],
    },
    {
        groupName: 'Japan',
        chatbots: [{ name: 'Sakana', webURL: 'https://chat.sakana.ai/', noLoginNeeded: true }],
    },
    {
        groupName: 'Poland',
        chatbots: [{ name: 'Bielik', webURL: 'https://chat.bielik.ai/' }],
    },
    {
        groupName: 'Greece',
        chatbots: [{ name: 'Krikri', webURL: 'https://chat.ilsp.gr/' }],
    },
];

function getFaviconUrl(url) {
    try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=48`;
    } catch {
        return null;
    }
}

function getDomain(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
}

const normalizedWebsites = websites.map((group) => ({
    ...group,
    searchText: group.groupName.toLowerCase(),
    chatbots: group.chatbots.map((chatbot) => ({
        ...chatbot,
        domain: getDomain(chatbot.webURL),
        searchText: `${chatbot.name} ${getDomain(chatbot.webURL)} ${group.groupName}`.toLowerCase(),
    })),
}));

let currentFilter = '';
let noLoginOnly = false;

const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const noLoginFilter = document.getElementById('noLoginFilter');
const groupsContainer = document.getElementById('groupsContainer');
const statsBar = document.getElementById('statsBar');
const noResults = document.getElementById('noResults');

function setFilterPanelState(isOpen) {
    filterPanel.hidden = !isOpen;
    filterPanel.classList.toggle('show', isOpen);
    filterBtn.classList.toggle('active', isOpen);
    filterBtn.setAttribute('aria-expanded', String(isOpen));
    groupsContainer.classList.toggle('filter-open', isOpen);
}

function syncUrlState() {
    const url = new URL(window.location.href);
    if (currentFilter) {
        url.searchParams.set('q', currentFilter);
    } else {
        url.searchParams.delete('q');
    }

    if (noLoginOnly) {
        url.searchParams.set('noLogin', '1');
    } else {
        url.searchParams.delete('noLogin');
    }

    history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

function renderStats(visibleChatbots, visibleCountries) {
    const totalChatbots = normalizedWebsites.reduce((sum, group) => sum + group.chatbots.length, 0);
    const totalGroups = normalizedWebsites.filter(
        (group) => group.groupType !== 'AGGREGATOR'
    ).length;
    const hasActiveFilter = currentFilter || noLoginOnly;

    const chatbotsText = hasActiveFilter
        ? `${visibleChatbots}/${totalChatbots}`
        : `${totalChatbots}`;
    const countriesText = hasActiveFilter ? `${visibleCountries}/${totalGroups}` : `${totalGroups}`;

    statsBar.innerHTML = `
		<div class="stat-item">
			<span class="num">${chatbotsText}</span>
			<span class="label">chatbots</span>
		</div>
		<div class="stat-item">
			<span class="num">${countriesText}</span>
			<span class="label">countries</span>
		</div>
	`;
}

function renderGroups(filter = '', noLoginFilterEnabled = false) {
    groupsContainer.innerHTML = '';
    let anyVisible = false;
    let visibleChatbots = 0;
    let visibleCountries = 0;

    normalizedWebsites.forEach((group, groupIdx) => {
        const filtered = group.chatbots.filter((chatbot) => {
            const matchesSearch =
                !filter || chatbot.searchText.includes(filter) || group.searchText.includes(filter);
            const matchesNoLogin = !noLoginFilterEnabled || chatbot.noLoginNeeded === true;
            return matchesSearch && matchesNoLogin;
        });

        if (filtered.length === 0) {
            return;
        }

        anyVisible = true;
        visibleChatbots += filtered.length;
        if (group.groupType !== 'AGGREGATOR') {
            visibleCountries += 1;
        }

        const section = document.createElement('section');
        section.className = 'group-section mb-12';
        section.setAttribute('aria-label', group.groupName);

        const cardsHTML = filtered
            .map((chatbot) => {
                const faviconUrl = getFaviconUrl(chatbot.webURL);
                const iconContent = faviconUrl
                    ? `<img src="${faviconUrl}" alt="${chatbot.name} icon" class="favicon-img" loading="lazy" decoding="async">`
                    : '<i class="fas fa-robot" aria-hidden="true"></i>';

                return `
				<div class="chatbot-card" aria-label="${chatbot.name}">
					<div class="card-icon">
						${iconContent}
					</div>
					<div class="card-text">
						<div class="name">${chatbot.name}</div>
						${chatbot.noLoginNeeded ? '<span class="no-login-pill">No login needed</span>' : ''}
					</div>
					<div class="card-actions">
						<a href="${chatbot.webURL}" target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="Open ${chatbot.name} website" title="Website">
							<i class="fas fa-globe" aria-hidden="true"></i>
						</a>
						${
                            chatbot.appURL
                                ? `<a href="${chatbot.appURL}" target="_blank" rel="noopener noreferrer" class="action-btn" aria-label="Open ${chatbot.name} app" title="Android App">
							<i class="fab fa-android" aria-hidden="true"></i>
						</a>`
                                : ''
                        }
					</div>
				</div>
			`;
            })
            .join('');

        section.innerHTML = `
			<div class="group-header">
				<h2>${group.groupName}</h2>
				<span class="count">${filtered.length}</span>
			</div>
			<div class="card-grid">
				${cardsHTML}
			</div>
		`;

        groupsContainer.appendChild(section);

        window.setTimeout(() => {
            section.classList.add('visible');
        }, 80 * groupIdx);
    });

    noResults.classList.toggle('show', !anyVisible);
    return { visibleChatbots, visibleCountries };
}

function applyFilters() {
    const { visibleChatbots, visibleCountries } = renderGroups(currentFilter, noLoginOnly);
    renderStats(visibleChatbots, visibleCountries);
    syncUrlState();
}

function createParticles() {
    const container = document.getElementById('particles');
    container.replaceChildren();

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    for (let index = 0; index < 12; index += 1) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${6 + Math.random() * 6}s`;
        particle.style.width = `${1.5 + Math.random() * 2}px`;
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

function hydrateStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    currentFilter = (params.get('q') || '').trim().toLowerCase();
    noLoginOnly = params.get('noLogin') === '1';
    searchInput.value = currentFilter;
    noLoginFilter.checked = noLoginOnly;
}

let searchTimeout;
searchInput.addEventListener('input', () => {
    window.clearTimeout(searchTimeout);
    searchTimeout = window.setTimeout(() => {
        currentFilter = searchInput.value.toLowerCase().trim();
        applyFilters();
    }, 150);
});

filterBtn.addEventListener('click', () => {
    setFilterPanelState(!filterPanel.classList.contains('show'));
});

noLoginFilter.addEventListener('change', () => {
    noLoginOnly = noLoginFilter.checked;
    applyFilters();
});

document.addEventListener('click', (event) => {
    if (!filterBtn.contains(event.target) && !filterPanel.contains(event.target)) {
        setFilterPanelState(false);
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement !== searchInput) {
        event.preventDefault();
        searchInput.focus();
    }

    if (event.key === 'Escape') {
        if (!filterPanel.hidden) {
            setFilterPanelState(false);
        }

        if (document.activeElement === searchInput) {
            searchInput.blur();
            searchInput.value = '';
            currentFilter = '';
            applyFilters();
        }
    }
});

hydrateStateFromUrl();
applyFilters();
createParticles();
setFilterPanelState(false);
