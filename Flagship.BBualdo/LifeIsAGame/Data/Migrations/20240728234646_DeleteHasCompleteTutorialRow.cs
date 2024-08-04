using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class DeleteHasCompleteTutorialRow : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("073d92d7-e3a1-49a9-873c-8b423839309e"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("2cf3e6bf-6b15-41ca-93a4-c7fb958fe447"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3ce7f7de-e6a4-4f5b-848f-9512b6755644"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("7511eaa1-d007-4b5e-af58-760f1dc52e23"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("7cd41541-8d3a-4ed8-ae77-fcae6c5533f2"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("8553417d-5fbe-4c15-9921-5634821871fd"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("8db477e0-da3e-4cec-9a02-6d207dd16d2c"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("90498f2b-8467-43cd-92d6-1c2bc83d40f9"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("95da7ac3-489f-4a5e-99b0-cf0590ec3786"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9d6505af-5ac5-4cbb-8d2b-5cee9aeb35b3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9d7158ec-ebca-4d44-bf93-72f2affb6e8a"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9f461c34-446f-4159-8728-314407beed74"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a46063f9-b670-401a-a130-d2a0ec05fe8d"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a84b4884-a7bb-47b4-9dfa-aa9e18f2e922"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b6a496e7-8a8d-4adf-ac0e-56ef2468bad8"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b804cf6d-6652-4cce-8873-f1cb6ee0813d"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d9e3b4ca-df78-4412-be8a-660eb7a14403"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("e9269f9e-5e3f-4d51-bb77-1b81332d5462"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ee35684f-755b-415e-a058-87f15324a657"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("fa8695d1-23b0-4714-a69c-0b71c68b2ead"));

            migrationBuilder.DropColumn(
                name: "HasCompletedTutorial",
                table: "AspNetUsers");

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Key", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("1357cf7f-483a-4662-ab96-25193efc0cdb"), "https://i.ibb.co/XDhBYzR/level50.jpg", "REACH_LEVEL_50", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("1edcb72a-368e-4438-8cb1-8887d9d52cd5"), "https://i.ibb.co/Qcbyf2s/level25.jpg", "REACH_LEVEL_25", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("2be61b37-b91e-42d8-ba11-51c857ac54d6"), "https://i.ibb.co/tZDHcyJ/all-achievements.jpg", "UNLOCK_ALL_ACHIEVEMENTS", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("2c291e43-d627-4c2c-8894-c93516536c1a"), "https://i.ibb.co/Jp6PCT0/missions10.jpg", "COMPLETE_10_MISSIONS", "Complete 10 missions.", "Deca-Task Dynamo", 100 },
                    { new Guid("41bb8b79-ae97-4d3a-a32f-54d233dbf858"), "https://i.ibb.co/kGHYJvS/tutorial.jpg", "COMPLETE_TUTORIAL", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("481a053b-cd75-46e6-a2a2-d2d546ac8859"), "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg", "COMPLETE_DROP_OF_SWEAT_MISSION", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("4ae3ed8a-086f-4e75-97fd-24cad7fdc950"), "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg", "COMPLETE_ANTI_PROCRASTINATOR_MISSION", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("4ebd2736-94a0-4fe0-91c2-19bd95a139df"), "https://i.ibb.co/zfBdvCS/challenging.jpg", "COMPLETE_CHALLENGING_MISSION", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("6bcf31ef-16a0-4150-9d3b-494869c43ef4"), "https://i.ibb.co/zbKH66t/missions50.jpg", "COMPLETE_50_MISSIONS", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("6eb4d5ce-c9eb-4cc5-8fba-dcb19a154b6d"), "https://i.ibb.co/PcKjDDX/level5.jpg", "REACH_LEVEL_5", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("8cf74b82-39b3-41c8-aad1-7df5c917026d"), "https://i.ibb.co/rdQ2QkM/missions25.jpg", "COMPLETE_25_MISSIONS", "Complete 25 missions.", "Quarter Century Quasar", 250 },
                    { new Guid("a145c80a-94f0-4bb8-9a20-682a87ed26dd"), "https://i.ibb.co/6vP8FXv/level10.jpg", "REACH_LEVEL_10", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("c7757f74-4d50-46de-8e17-eaa4ef79ea59"), "https://i.ibb.co/PxmwFbt/life-hacker.jpg", "COMPLETE_LIFE_HACKER_MISSION", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("c7f83bd8-79db-4622-ab79-c12b8c700653"), "https://i.ibb.co/X3JvBZQ/give-up.jpg", "GIVE_UP_WITH_SUBTASK", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("c9800e7e-b9de-4bc1-8453-1cc23d20cec3"), "https://i.ibb.co/12Y97TW/every-difficulty.jpg", "COMPLETE_ALL_DIFFICULTY_LEVELS", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("ce522009-d197-426e-918c-9b55341c89ce"), "https://i.ibb.co/473Z5Lr/complete-first.jpg", "COMPLETE_FIRST_MISSION", "Complete your first mission.", "Codebreaker Initiate", 25 },
                    { new Guid("d1ef7adb-1968-4fc9-8fea-a8eeacd4be9e"), "https://i.ibb.co/KLWDbWg/add-first.jpg", "ADD_FIRST_MISSION", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("d69b2719-527f-406a-b710-17bd3025f460"), "https://i.ibb.co/DGLpVZx/profile.jpg", "COMPLETE_PROFILE", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("efe7041a-e99c-428f-9aff-921ffa3cdc91"), "https://i.ibb.co/sF4BDHg/missions5.jpg", "COMPLETE_5_MISSIONS", "Complete 5 missions.", "Mission Maestro", 50 },
                    { new Guid("fd0c6301-94a9-4464-87e6-d93f92e825a6"), "https://i.ibb.co/RCYg2d5/daily.jpg", "COMPLETE_DAILY_MISSION", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("1357cf7f-483a-4662-ab96-25193efc0cdb"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("1edcb72a-368e-4438-8cb1-8887d9d52cd5"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("2be61b37-b91e-42d8-ba11-51c857ac54d6"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("2c291e43-d627-4c2c-8894-c93516536c1a"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("41bb8b79-ae97-4d3a-a32f-54d233dbf858"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("481a053b-cd75-46e6-a2a2-d2d546ac8859"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("4ae3ed8a-086f-4e75-97fd-24cad7fdc950"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("4ebd2736-94a0-4fe0-91c2-19bd95a139df"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("6bcf31ef-16a0-4150-9d3b-494869c43ef4"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("6eb4d5ce-c9eb-4cc5-8fba-dcb19a154b6d"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("8cf74b82-39b3-41c8-aad1-7df5c917026d"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("a145c80a-94f0-4bb8-9a20-682a87ed26dd"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c7757f74-4d50-46de-8e17-eaa4ef79ea59"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c7f83bd8-79db-4622-ab79-c12b8c700653"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c9800e7e-b9de-4bc1-8453-1cc23d20cec3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ce522009-d197-426e-918c-9b55341c89ce"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d1ef7adb-1968-4fc9-8fea-a8eeacd4be9e"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("d69b2719-527f-406a-b710-17bd3025f460"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("efe7041a-e99c-428f-9aff-921ffa3cdc91"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("fd0c6301-94a9-4464-87e6-d93f92e825a6"));

            migrationBuilder.AddColumn<bool>(
                name: "HasCompletedTutorial",
                table: "AspNetUsers",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Key", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("073d92d7-e3a1-49a9-873c-8b423839309e"), "https://i.ibb.co/12Y97TW/every-difficulty.jpg", "COMPLETE_ALL_DIFFICULTY_LEVELS", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("2cf3e6bf-6b15-41ca-93a4-c7fb958fe447"), "https://i.ibb.co/PxmwFbt/life-hacker.jpg", "COMPLETE_LIFE_HACKER_MISSION", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("3ce7f7de-e6a4-4f5b-848f-9512b6755644"), "https://i.ibb.co/Jp6PCT0/missions10.jpg", "COMPLETE_10_MISSIONS", "Complete 10 missions.", "Deca-Task Dynamo", 100 },
                    { new Guid("7511eaa1-d007-4b5e-af58-760f1dc52e23"), "https://i.ibb.co/Qcbyf2s/level25.jpg", "REACH_LEVEL_25", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("7cd41541-8d3a-4ed8-ae77-fcae6c5533f2"), "https://i.ibb.co/X3JvBZQ/give-up.jpg", "GIVE_UP_WITH_SUBTASK", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("8553417d-5fbe-4c15-9921-5634821871fd"), "https://i.ibb.co/zbKH66t/missions50.jpg", "COMPLETE_50_MISSIONS", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("8db477e0-da3e-4cec-9a02-6d207dd16d2c"), "https://i.ibb.co/zfBdvCS/challenging.jpg", "COMPLETE_CHALLENGING_MISSION", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("90498f2b-8467-43cd-92d6-1c2bc83d40f9"), "https://i.ibb.co/tZDHcyJ/all-achievements.jpg", "UNLOCK_ALL_ACHIEVEMENTS", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("95da7ac3-489f-4a5e-99b0-cf0590ec3786"), "https://i.ibb.co/KLWDbWg/add-first.jpg", "ADD_FIRST_MISSION", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("9d6505af-5ac5-4cbb-8d2b-5cee9aeb35b3"), "https://i.ibb.co/kGHYJvS/tutorial.jpg", "COMPLETE_TUTORIAL", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("9d7158ec-ebca-4d44-bf93-72f2affb6e8a"), "https://i.ibb.co/PcKjDDX/level5.jpg", "REACH_LEVEL_5", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("9f461c34-446f-4159-8728-314407beed74"), "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg", "COMPLETE_ANTI_PROCRASTINATOR_MISSION", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("a46063f9-b670-401a-a130-d2a0ec05fe8d"), "https://i.ibb.co/RCYg2d5/daily.jpg", "COMPLETE_DAILY_MISSION", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 },
                    { new Guid("a84b4884-a7bb-47b4-9dfa-aa9e18f2e922"), "https://i.ibb.co/473Z5Lr/complete-first.jpg", "COMPLETE_FIRST_MISSION", "Complete your first mission.", "Codebreaker Initiate", 25 },
                    { new Guid("b6a496e7-8a8d-4adf-ac0e-56ef2468bad8"), "https://i.ibb.co/rdQ2QkM/missions25.jpg", "COMPLETE_25_MISSIONS", "Complete 25 missions.", "Quarter Century Quasar", 250 },
                    { new Guid("b804cf6d-6652-4cce-8873-f1cb6ee0813d"), "https://i.ibb.co/DGLpVZx/profile.jpg", "COMPLETE_PROFILE", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("d9e3b4ca-df78-4412-be8a-660eb7a14403"), "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg", "COMPLETE_DROP_OF_SWEAT_MISSION", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("e9269f9e-5e3f-4d51-bb77-1b81332d5462"), "https://i.ibb.co/6vP8FXv/level10.jpg", "REACH_LEVEL_10", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("ee35684f-755b-415e-a058-87f15324a657"), "https://i.ibb.co/XDhBYzR/level50.jpg", "REACH_LEVEL_50", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("fa8695d1-23b0-4714-a69c-0b71c68b2ead"), "https://i.ibb.co/sF4BDHg/missions5.jpg", "COMPLETE_5_MISSIONS", "Complete 5 missions.", "Mission Maestro", 50 }
                });
        }
    }
}
