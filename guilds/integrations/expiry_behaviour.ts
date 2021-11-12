/**
 * The behavior of expiring subscribers.
 *
 * https://discord.com/developers/docs/resources/guild#integration-object-integration-structure
 */
export enum GuildIntegrationExpireBehaviour {
  /** Remove the integration role from when the subscription expires. */
  RemoveRole = 0,

  /** Kicks the integration or kicks the subscriber, the docs don't specify. */
  Kick = 1,
}
