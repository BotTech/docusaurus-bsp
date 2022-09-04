import {
	AllContent,
	ConfigureWebpackUtils,
	HtmlTags,
	LoadContext,
	Plugin,
	PluginContentLoadedActions,
	Props,
	TranslationFile
} from '@docusaurus/types'
import {HelmetServerState} from 'react-helmet-async';
import {Configuration as WebpackConfiguration} from 'webpack';
import {CustomizeRuleString} from 'webpack-merge/dist/types';

export type Content = unknown

export default function docusaurusBspPlugin(context: LoadContext, opts): Plugin<Content> {
	return {
		name: "docusaurus-bsp-plugin",

		configureWebpack(config: WebpackConfiguration,
										 isServer: boolean,
										 utils: ConfigureWebpackUtils,
										 content: unknown): WebpackConfiguration & { mergeStrategy?: { [p: string]: CustomizeRuleString } } {
			return undefined;
		},

		contentLoaded(args: { content: Content; allContent: AllContent; actions: PluginContentLoadedActions }): Promise<void> | void {
			return undefined;
		},

		getTranslationFiles(args: { content: Content }): Promise<TranslationFile[]> | TranslationFile[] {
			return undefined;
		},

		injectHtmlTags(args: { content: Content }): { headTags?: HtmlTags; preBodyTags?: HtmlTags; postBodyTags?: HtmlTags } {
			return {};
		},

		loadContent(): Promise<Content> | Content {
			return undefined;
		},

		postBuild(props: Props & { content: Content; head: { [p: string]: HelmetServerState } }): Promise<void> | void {
			return undefined;
		},

		translateContent(args: { content: Content; translationFiles: TranslationFile[] }): Content {
			return undefined;
		}
	}
}