using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class AddKeyToAchievement : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("0a6e91d2-3b5c-4516-bcab-a80bb0bbc5f0"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("0c6d28a6-8650-452c-9b56-a60b9d584d50"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("197d2e24-599c-46bf-8e6c-805fc22779a3"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("22a4d9ae-4cd8-40a9-b00c-a4f398d7085b"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("22b02253-1c38-40e5-b18e-d3baaef48fdd"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("36f4d812-c8ac-4c37-944b-98a1e76a8f78"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3b40ef98-068f-4d2a-9eb5-edc2e3029ab2"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("3edf094e-54c2-41f7-9b24-ae86ba010bba"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("5050cf98-a64a-41f2-91aa-dbb2f36294f5"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("5bd4cd60-9f73-4eed-9c42-0219083b65f2"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("6f359690-6cef-4f90-b045-3c4c68dea9a6"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("76909e32-f0a1-4037-b515-c26cec0fd7fc"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("8698126b-fd08-47c5-a508-eebd8f81a2ef"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("9f3aacfc-7a81-4ea7-b48c-549c5c52b5e1"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("b3a9a42b-3738-485a-bcf1-6a64d8e77939"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("c75992c7-4a7c-4fe9-81a3-39a8fe57186f"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("cc730155-ffa2-4552-a097-1909e772eaf4"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("db7c390c-dcd0-495b-b576-ebb6786fd782"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("eaeb3378-c22a-49d8-82ea-08a263de74eb"));

            migrationBuilder.DeleteData(
                table: "Achievements",
                keyColumn: "Id",
                keyValue: new Guid("ee55446d-8420-4204-9e28-330ae6a1a806"));

            migrationBuilder.AddColumn<string>(
                name: "Key",
                table: "Achievements",
                type: "nvarchar(64)",
                maxLength: 64,
                nullable: false,
                defaultValue: "");

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

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "Key",
                table: "Achievements");

            migrationBuilder.InsertData(
                table: "Achievements",
                columns: new[] { "Id", "ImageUrl", "Requirements", "Title", "XpReward" },
                values: new object[,]
                {
                    { new Guid("0a6e91d2-3b5c-4516-bcab-a80bb0bbc5f0"), "https://i.ibb.co/kGHYJvS/tutorial.jpg", "Complete 'How To Play'.", "Neon Novice", 10 },
                    { new Guid("0c6d28a6-8650-452c-9b56-a60b9d584d50"), "https://i.ibb.co/6vP8FXv/level10.jpg", "Reach level 10.", "Deca-Level Dynamo", 100 },
                    { new Guid("197d2e24-599c-46bf-8e6c-805fc22779a3"), "https://i.ibb.co/zbKH66t/missions50.jpg", "Complete 50 missions.", "Half Century Hero", 500 },
                    { new Guid("22a4d9ae-4cd8-40a9-b00c-a4f398d7085b"), "https://i.ibb.co/c3Nntzw/drop-of-sweat.jpg", "Complete mission on 'Drop of Sweat' difficulty.", "Sweat-Proof Runner", 50 },
                    { new Guid("22b02253-1c38-40e5-b18e-d3baaef48fdd"), "https://i.ibb.co/12Y97TW/every-difficulty.jpg", "Complete mission on every difficulty level.", "Difficulty Dominator", 200 },
                    { new Guid("36f4d812-c8ac-4c37-944b-98a1e76a8f78"), "https://i.ibb.co/PxmwFbt/life-hacker.jpg", "Complete mission on 'Life-Hacker' difficulty.", "Life-Hacker Elite", 100 },
                    { new Guid("3b40ef98-068f-4d2a-9eb5-edc2e3029ab2"), "https://i.ibb.co/DGLpVZx/profile.jpg", "Complete every field in profile dashboard.", "Profile Overdrive", 10 },
                    { new Guid("3edf094e-54c2-41f7-9b24-ae86ba010bba"), "https://i.ibb.co/473Z5Lr/complete-first.jpg", "Complete your first mission.", "Codebreaker Initiate", 25 },
                    { new Guid("5050cf98-a64a-41f2-91aa-dbb2f36294f5"), "https://i.ibb.co/XDhBYzR/level50.jpg", "Reach level 50.", "Half Century Hacker", 500 },
                    { new Guid("5bd4cd60-9f73-4eed-9c42-0219083b65f2"), "https://i.ibb.co/RCYg2d5/daily.jpg", "Complete mission on 'Daily' difficulty.", "Daily Data Dynamo", 25 },
                    { new Guid("6f359690-6cef-4f90-b045-3c4c68dea9a6"), "https://i.ibb.co/sF4BDHg/missions5.jpg", "Complete 5 missions.", "Mission Maestro", 50 },
                    { new Guid("76909e32-f0a1-4037-b515-c26cec0fd7fc"), "https://i.ibb.co/zfBdvCS/challenging.jpg", "Complete mission on 'Challenging' difficulty.", "Chaos Conqueror", 75 },
                    { new Guid("8698126b-fd08-47c5-a508-eebd8f81a2ef"), "https://i.ibb.co/rdQ2QkM/missions25.jpg", "Complete 25 missions.", "Quarter Century Quasar", 250 },
                    { new Guid("9f3aacfc-7a81-4ea7-b48c-549c5c52b5e1"), "https://i.ibb.co/tZDHcyJ/all-achievements.jpg", "Unlock every achievement.", "Achievement Unleashed", 2500 },
                    { new Guid("b3a9a42b-3738-485a-bcf1-6a64d8e77939"), "https://i.ibb.co/Qcbyf2s/level25.jpg", "Reach level 25.", "Quarter Century Cipher", 250 },
                    { new Guid("c75992c7-4a7c-4fe9-81a3-39a8fe57186f"), "https://i.ibb.co/KLWDbWg/add-first.jpg", "Add your first mission.", "Mission Maverick", 10 },
                    { new Guid("cc730155-ffa2-4552-a097-1909e772eaf4"), "https://i.ibb.co/X3JvBZQ/give-up.jpg", "Give up a mission with at least one subtask completed.", "Strategic Surrender", 25 },
                    { new Guid("db7c390c-dcd0-495b-b576-ebb6786fd782"), "https://i.ibb.co/PcKjDDX/level5.jpg", "Reach level 5.", "Level 5 Luminary", 50 },
                    { new Guid("eaeb3378-c22a-49d8-82ea-08a263de74eb"), "https://i.ibb.co/R7WxLcr/anti-procrastinator.jpg", "Complete mission on 'Anti-Procrastinator' difficulty.", "Procrastination Purged", 250 },
                    { new Guid("ee55446d-8420-4204-9e28-330ae6a1a806"), "https://i.ibb.co/Jp6PCT0/missions10.jpg", "Complete 10 missions.", "Deca-Task Dynamo", 100 }
                });
        }
    }
}
